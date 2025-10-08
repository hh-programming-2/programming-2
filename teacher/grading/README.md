# Grading script

This script calculates students' grades automatically based on GitHub Classroom CSV grading files.

## How to use

The script operates on the following files:

- Put GitHub Classroom's CSV grading files under the `data/exercises` directory 
- Put GitHub username Moodle submission directories (you can use the directories from the Moodle submission export directly) under the `data/username-submissions` directory

To generate grading, run `npm run grade`. The grading will be generated in the `data/grading.json` file.
