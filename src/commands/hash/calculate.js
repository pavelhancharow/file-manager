import * as crypto from 'node:crypto';
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as process from 'node:process';

const calculate = async (args) => {
  if (!args[0]) return console.info('Invalid input');

  const sourcePath = path.resolve(process.cwd(), args[0]);

  try {
    await fs.promises.access(sourcePath, fs.constants.F_OK);

    const hash = crypto.createHash('sha256');
    const readStream = fs.createReadStream(sourcePath);

    await new Promise((resolve, reject) => {
      readStream.on('data', (chunk) => {
        hash.update(chunk);
      });

      readStream.on('end', () => {
        console.info('File Hash:', hash.digest('hex'));
      });

      readStream.on('error', reject);
      readStream.on('close', resolve);
    });
  } catch (error) {
    console.error('Operation Failed', error.toString());
  }
};

export default calculate;