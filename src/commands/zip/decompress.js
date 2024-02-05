import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import zlib from 'node:zlib';

const decompress = async (args) => {
  if (!args[0] || !args[1]) return console.info('Invalid input');

  const sourcePath = path.resolve(process.cwd(), args[0]);
  const targetPath = path.resolve(process.cwd(), args[1]);

  try {
    await fs.promises.access(sourcePath, fs.constants.F_OK);

    const dirName = path.dirname(targetPath);
    await fs.promises.access(dirName, fs.constants.F_OK);

    const readStream = fs.createReadStream(sourcePath);
    const writeStream = fs.createWriteStream(targetPath);
    const brotliCompress = zlib.createBrotliCompress();

    await new Promise((resolve, reject) => {
      readStream.on('error', reject);
      brotliCompress.on('error', reject);
      brotliCompress.on('end', resolve);
      writeStream.on('close', resolve);
      readStream.pipe(brotliCompress).pipe(writeStream);
    });
  } catch (error) {
    console.error('Operation Failed', error.toString());
  }
};

export default decompress;