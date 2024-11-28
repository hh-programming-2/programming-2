import { join, dirname } from 'path'
import { fileURLToPath } from 'url';
import { writeFile, readFile } from 'node:fs/promises';
import Mustache from 'mustache'

import classroomLinks from '../classroom-links.json' assert { type: 'json' }

const rootPath = dirname(fileURLToPath(import.meta.url))
const templateFilePath = join(rootPath, '..', 'exercises-template.html')
const outputFilePath = join(rootPath, '..', 'exercises.html');
const templateFile = await readFile(templateFilePath);
const content = Mustache.render(templateFile.toString(), classroomLinks);

await writeFile(outputFilePath, content);

