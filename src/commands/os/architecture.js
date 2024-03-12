import * as os from 'node:os';

const architecture = async () => {
  console.log(`CPU Architecture: ${os.arch()}`);
};

export default architecture;