import fs from "node:fs/promises";
import path from "path";
import { glob } from "glob";

import { parseExerciseFile, parseGitHubUsername, parseGitSubmissionPath } from "./utils.js";

const GIT_HELLO_WORLD = 'Git "Hello world"';
const WARM_UP = "Warm up";
const FIRST_WEEK_EXERCISES = [GIT_HELLO_WORLD, WARM_UP];

async function getExercisePoints() {
  const exerciseGlob = await glob(["data/exercises/*.csv"]);
  const exercisePoints = [];

  for (const file of exerciseGlob) {
    const content = await fs.readFile(file, { encoding: "utf8" });
    const grades = await parseExerciseFile(content);
    exercisePoints.push(grades);
  }

  return exercisePoints;
}

async function getStudents() {
  const exerciseGlob = await glob(["data/username-submissions/*/*.html"]);
  const students = [];

  for (const file of exerciseGlob) {
    const content = await fs.readFile(file, { encoding: "utf8" });
    const { fullName, studentNumber } = parseGitSubmissionPath(file);
    const githubUsername = parseGitHubUsername(content);

    if (githubUsername) {
      students.push({
        fullName,
        studentNumber,
        githubUsername,
      });
    } else {
      console.warn(
        `Missing GitHub username for student ${fullName}, ${studentNumber}`
      );
    }
  }

  return students;
}

async function studentsWithExercisePoints(students) {
  const exercisePoints = await getExercisePoints();

  return students.map((student) => ({
    ...student,
    rawPoints: exercisePoints.map((exercise) => {
      const studentPoints = exercise.find(
        ({ github_username }) => github_username === student.githubUsername
      );

      return {
        exerciseName: studentPoints?.assignment_name ?? null,
        submissionTimestamp: studentPoints?.submission_timestamp ?? null,
        points: studentPoints?.points_awarded
          ? Number(studentPoints.points_awarded)
          : null,
      };
    }),
  }));
}

function getStudentGrading(student) {
  const { rawPoints } = student;

  const gitHelloWorldPoints =
    rawPoints.find(({ exerciseName }) => exerciseName === GIT_HELLO_WORLD)
      ?.points ?? 0;

  const warmUpPoints =
    rawPoints.find(({ exerciseName }) => exerciseName === WARM_UP)?.points ?? 0;

  const scaledWarmUpPoints = (warmUpPoints / 20) * 0.8;

  const pointInformationAfterFirstWeek = rawPoints
    .filter(({ exerciseName }) => !FIRST_WEEK_EXERCISES.includes(exerciseName))
    .map(({ exerciseName, points }) => ({
      exerciseName,
      points: points / 20,
    }));

  const scaledPoints = [
    { exerciseName: GIT_HELLO_WORLD, points: gitHelloWorldPoints },
    { exerciseName: WARM_UP, points: scaledWarmUpPoints },
    ...pointInformationAfterFirstWeek,
  ];

  const pointsAfterFirstWeek = pointInformationAfterFirstWeek
    .map(({ points }) => points)
    .reduce((sum, current) => sum + current, 0);

  const grade = Math.round(
    (gitHelloWorldPoints + scaledWarmUpPoints + pointsAfterFirstWeek) / 8
  );

  return {
    scaledPoints,
    grade,
  };
}

async function getStudentsWithGradingInformation() {
  let students = await getStudents();
  students = await studentsWithExercisePoints(students);

  return students.map((student) => ({
    ...student,
    ...getStudentGrading(student),
  }));
}

async function writeGradingInformation() {
  const students = await getStudentsWithGradingInformation();
  
  const formattedStudents = students.map(
    ({ fullName, studentNumber, githubUsername, scaledPoints, grade }) => ({
      fullName,
      studentNumber,
      githubUsername,
      grade,
      points: scaledPoints,
    })
  );

  await fs.writeFile(
    path.join(import.meta.dirname, "data", "grading.json"),
    JSON.stringify(formattedStudents, null, 2)
  );
}

await writeGradingInformation();
