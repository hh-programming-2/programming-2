import { parse } from "csv-parse";

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
      rejects(error);
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
