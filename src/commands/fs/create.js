import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import * as process from 'node:process';

const createFile = async (targetPath) => {
  try {
    await fs.writeFile(targetPath, '');
  } catch (error) {
    console.error(error.toString());
  }
};

const create = async (args) => {
  if (!args.length) return console.info('Invalid input');

  const targetPath = path.resolve(process.cwd(), args[0]);

  try {
    await fs.access(targetPath, fs.constants.F_OK);

    throw new Error(`'${targetPath}' file already exists`);
  } catch (error) {
    if (error && error.code === 'ENOENT' && error.syscall === 'access') {
      await createFile(targetPath);
      return;
    }

    console.error('Operation Failed', error.toString());
  }
}

export default create;