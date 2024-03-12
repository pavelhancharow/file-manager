import * as process from 'node:process';
import * as readline from 'node:readline/promises';
import { CommandsList, ExitCommand, FileManagerPrompt } from './constants/index.js';
import { printCurrentDirectory, handleCommand } from './helpers/index.js';

const autoCompleteOptions = [ExitCommand, ...CommandsList].sort();

const completer = async (line) => {
  const hits = autoCompleteOptions.filter((c) => c.startsWith(line));

  return [hits.length ? hits : autoCompleteOptions, line];
};

const app = async (username) => {
  const rlp = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: FileManagerPrompt,
    completer: completer,
  });

  process.stdout.write(FileManagerPrompt);

  const handleExit = async () => {
    await rlp.close();
  };

  rlp
    .on('line', async (line) => {
      try {
        const [command, ...args] = line.trim().split(' ');

        switch (command) {
          case ExitCommand:
            await handleExit()
            break;
          default:
            await handleCommand(command, args);
            break;
        }
        printCurrentDirectory();
        await rlp.prompt(true);
      } catch (error) {
        console.error('Operation failed', error.toString());
        printCurrentDirectory();
        process.stdout.write(FileManagerPrompt);
      }
    })
    .on('SIGINT', handleExit)
    .on('close', () => {
      console.info(`Thank you for using File Manager, ${username}, goodbye!`);
      printCurrentDirectory();
      process.exit(0);
    });
};

export default app;