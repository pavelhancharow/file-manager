import * as process from 'node:process';

const up = async () => {
  process.chdir('..');
}

export default up;