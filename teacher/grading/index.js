import fs from "node:fs/promises";
import path from "path";
import { glob } from "glob";

import { parseExerciseFile } from "./utils.js";

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

async function getGitHubUsernames() {
  const exercisePoints = await getExercisePoints();

  const usernames = exercisePoints.flatMap((grades) =>
    grades.map(({ github_username }) => github_username)
  );

  return Array.from(new Set(usernames));
}

async function getStudents() {
  const exerciseGlob = await glob(["data/username-submissions/*/*.html"]);
  const githubUsernames = Array.from(await getGitHubUsernames());
  const students = [];

  for (const file of exerciseGlob) {
    const content = await fs.readFile(file, { encoding: "utf8" });
    const [, , studentDirectory] = file.split("\\");
    const [fullName, studentNumber] = studentDirectory.split("_");

    const githubUsername =
      githubUsernames.find((username) => content.includes(username)) ?? null;

    students.push({
      fullName,
      studentNumber,
      githubUsername,
    });
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

  const pointInformationAfterFirstWeek = rawPoints
    .filter(({ exerciseName }) => !FIRST_WEEK_EXERCISES.includes(exerciseName))
    .map(({ exerciseName, points }) => ({
      exerciseName,
      points: points / 20,
    }));

  const scaledPoints = [
    { exerciseName: GIT_HELLO_WORLD, points: gitHelloWorldPoints },
    { exerciseName: WARM_UP, points: warmUpPoints },
    ...pointInformationAfterFirstWeek,
  ];

  const pointsAfterFirstWeek = pointInformationAfterFirstWeek
    .map(({ points }) => points)
    .reduce((sum, current) => sum + current, 0);

  const grade = Math.round(
    (gitHelloWorldPoints + warmUpPoints + pointsAfterFirstWeek) / 8
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

  await fs.writeFile(
    path.join(import.meta.dirname, "data", "grading.json"),
    JSON.stringify(students, null, 2)
  );
}

await writeGradingInformation();
