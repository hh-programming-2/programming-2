import { parse } from "csv-parse";

const STUDENT_INFORMATION_SUBMISSION_PATH_REGEXP =
  /(?<fullName>[\w ]+)_(?<studentNumber>[0-9]+)_assignsubmission/;

export function parseExerciseFile(content) {
  const records = [];

  const parser = parse({
    delimiter: ",",
  });

  parser.write(content);
  parser.end();

  return new Promise((resolve, reject) => {
    parser.on("readable", function () {
      let record;
      while ((record = parser.read()) !== null) {
        records.push(record);
      }
    });

    parser.on("error", function (err) {
      reject(err);
    });

    parser.on("end", function () {
      const [keys, ...rows] = records;

      resolve(
        rows.map((row) =>
          Object.fromEntries(row.map((value, index) => [keys[index], value]))
        )
      );
    });
  });
}

export function parseGitSubmissionPath(submissionPath) {
  const { fullName, studentNumber } =
    STUDENT_INFORMATION_SUBMISSION_PATH_REGEXP.exec(submissionPath).groups;

  return {
    fullName,
    studentNumber,
  };
}
