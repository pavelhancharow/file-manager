import CommandHandler from '../commands/index.js';

export const handleCommand = async (command, args) => {
  if (!CommandHandler.hasOwnProperty(command)) {
    return console.info('Invalid input');
  }

  await CommandHandler[command](args);
};