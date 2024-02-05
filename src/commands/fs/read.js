import * as path from 'node:path';
import * as fs from 'node:fs';
import * as process from 'node:process';

const read = async (args) => {
  if (!args.length) return console.info('Invalid input');

  const sourcePath = path.resolve(process.cwd(), args[0]);

  try {
    await fs.promises.access(sourcePath, fs.constants.F_OK);

    const readStream = fs.createReadStream(sourcePath, { encoding: 'utf-8' });

    await new Promise((resolve, reject) => {
      readStream.on('error', reject);
      readStream.on('end', () => {
        process.stdout.write('\n');
      });
      readStream.on('close', resolve);
      readStream.pipe(process.stdout);
    });
  } catch (e) {
    console.error('Operation Failed', error.toString());
  }
}

export default read;