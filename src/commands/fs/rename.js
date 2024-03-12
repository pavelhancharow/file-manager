import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import * as process from 'node:process';

const renameFile = async (sourcePath, targetPath) => {
  try {
    await fs.rename(sourcePath, targetPath);
  } catch (error) {
    console.error('Operation Failed', error.toString());
  }
}

const rename = async (args) => {
  if (!args[0] || !args[1]) return console.info('Invalid input');

  const sourcePath = path.resolve(process.cwd(), args[0]);
  const targetPath = path.resolve(process.cwd(), args[1]);

  try {
    await fs.access(sourcePath, fs.constants.F_OK);
    await fs.access(targetPath, fs.constants.F_OK);

    throw new Error(`'${targetPath}' file already exists`);
  } catch (error) {
    if (error && error.code === 'ENOENT' && error.syscall === 'access') {
      await renameFile(sourcePath, targetPath);
      return;
    }

    console.error('Operation Failed', error.toString());
  }
};

export default rename;
