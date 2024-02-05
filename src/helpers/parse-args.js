import * as process from 'node:process';

export const parseArgs = () => {
  const args = process.argv.slice(2);

  const data = { username: 'Username' };

  for (let i = 0; i < args.length; i++) {
    const [key, value] = args[i].replace('--', '').split('=');

    if (key === 'username' && value) {
      data.username = value;
      break;
    }
  }

  return data;
};
