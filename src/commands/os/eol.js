import * as os from 'node:os';

const eol = async () => {
  console.info('Default system End-Of-Line:', JSON.stringify(os.EOL));
};

export default eol;