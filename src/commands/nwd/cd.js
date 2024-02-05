import * as path from 'node:path';
import * as process from 'node:process';

const cd = async (args) => {
  if (!args.length) return console.info('Invalid input');

  const filePath = path.resolve(process.cwd(), args[0]);

  process.chdir(filePath);
}

export default cd;