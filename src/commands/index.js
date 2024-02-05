import CommandsOptions from '../constants/CommandsOptions.js';
import handleCopy from './fs/copy.js';
import handleAdd from './fs/create.js';
import handleMove from './fs/move.js';
import handleCat from './fs/read.js';
import handleRemove from './fs/remove.js';
import handleRename from './fs/rename.js';
import handleCalculate from './hash/calculate.js';
import handleCd from './nwd/cd.js';
import handleLs from './nwd/list.js';
import handleUp from './nwd/up.js';
import handleOS from './os/index.js';
import handleCompress from './zip/compress.js';
import handleDecompress from './zip/decompress.js';

const CommandHandler = {
  [CommandsOptions.Cp]: handleCopy,
  [CommandsOptions.Add]: handleAdd,
  [CommandsOptions.Mv]: handleMove,
  [CommandsOptions.Cat]: handleCat,
  [CommandsOptions.Rm]: handleRemove,
  [CommandsOptions.Rn]: handleRename,
  [CommandsOptions.Hash]: handleCalculate,
  [CommandsOptions.Cd]: handleCd,
  [CommandsOptions.Ls]: handleLs,
  [CommandsOptions.Up]: handleUp,
  [CommandsOptions.Os]: handleOS,
  [CommandsOptions.Compress]: handleCompress,
  [CommandsOptions.Decompress]: handleDecompress,
}

export default CommandHandler;