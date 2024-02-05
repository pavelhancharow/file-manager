import * as os from 'node:os';

const username = async () => {
  const { username } = os.userInfo();

  console.log(`System User Name: ${username}`);
};

export default username;