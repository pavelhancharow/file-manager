import OperatingSystemFlags from '../../constants/OperatingSystemFlags.js';
import architecture from './architecture.js';
import cpus from './cpus.js';
import eol from './eol.js';
import homedir from './homedir.js';
import username from './username.js';

const OSHandler = {
  [OperatingSystemFlags.Architecture]: architecture,
  [OperatingSystemFlags.CPUS]: cpus,
  [OperatingSystemFlags.EOL]: eol,
  [OperatingSystemFlags.HomeDir]: homedir,
  [OperatingSystemFlags.Username]: username,
};

const handleOS = async (args) => {
  const flag = args[0];
  if (!flag) return console.info('Invalid input');

  if (!OSHandler.hasOwnProperty(flag)) {
    return console.info('Invalid input');
  }

  await OSHandler[flag]();
}

export default handleOS;