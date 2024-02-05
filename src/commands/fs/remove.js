import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import * as process from 'node:process';

const remove = async (args) => {
  if (!args.length) return console.info('Invalid input');

  const sourcePath = path.resolve(process.cwd(), args[0]);

  try {
    await fs.access(sourcePath, fs.constants.F_OK);

    await fs.unlink(sourcePath);
  } catch (error) {
    console.error(error.toString());
  }
};

export default remove;