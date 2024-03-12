import * as os from 'node:os';

const homedir = async () => {
  console.info(`Home Directory: ${os.homedir()}`);
};

export default homedir;