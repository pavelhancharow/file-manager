import app from './src/app.js';
import { parseArgs, printCurrentDirectory } from './src/helpers/index.js';

const { username } = parseArgs();

console.info(`Welcome to the File Manager, ${username}!`);

printCurrentDirectory();

await app(username);
