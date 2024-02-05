import * as fs from 'node:fs';
import * as path from 'node:path';
import * as process from 'node:process';

const move = async (args) => {
  if (!args[0] || !args[1]) return console.info('Invalid input');

  const sourcePath = path.resolve(process.cwd(), args[0]);

  try {
    await fs.promises.access(sourcePath, fs.constants.F_OK);

    const fileName = path.basename(sourcePath);
    const targetPath = path.resolve(process.cwd(), args[1], fileName);

    const readStream = fs.createReadStream(sourcePath);
    const writeStream = fs.createWriteStream(targetPath);

    await new Promise((resolve, reject) => {
      readStream.on('error', reject);
      writeStream.on('error', reject);
      writeStream.on('close', resolve);
      readStream.pipe(writeStream);
    });

    await fs.promises.unlink(sourcePath);
  } catch (error) {
    console.error('Operation Failed', error.toString());
  }
};

export default move;
