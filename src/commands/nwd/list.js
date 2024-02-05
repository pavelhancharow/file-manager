import * as path from 'node:path';
import * as process from 'node:process';
import * as fs from 'node:fs/promises';

const list = async () => {
  const __dirname = process.cwd();

  const folderList = await fs.readdir(__dirname, { withFileTypes: false });

  const preparedList = await Promise.all(
    folderList.map(async (item) => {
      const fullPath = path.join(__dirname, item);
      const stats = await fs.stat(fullPath);
      const type = stats.isFile() ? 'file' : 'directory';

      return { Name: item, Type: type };
    })
  );

  const sortedList = preparedList.sort((a, b) => {
    return a.Type.localeCompare(b.Type) || a.Name.localeCompare(b.Name);
  });

  console.table(sortedList);
};

export default list;
