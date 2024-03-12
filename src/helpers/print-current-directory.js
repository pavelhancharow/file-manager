import * as process from 'node:process';

export const printCurrentDirectory = () => {
  const __dirname = process.cwd();

  console.info(`You are currently in: ${__dirname}`);
};