# File Manager Application

The File Manager Application is a command-line interface (CLI) tool designed to simplify file and directory management tasks. It provides a set of commands to perform basic file operations, navigate through directories, and gather information about the host machine's operating system. With support for Streams API, hash calculations, and file compression, this application offers a versatile set of features for users who prefer working in a terminal environment.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)

## Features

- Work using CLI
- Perform basic file operations (copy, move, delete, rename, etc.)
- Utilize Streams API
- Get information about the host machine operating system
- Perform hash calculations
- Compress and decompress files

## Installation

### Prerequisites

- Node.js (version >= 20)

### Steps

1. Clone the repository:
```bash
git clone https://github.com/pavelhancharow/file-manager.git
```
2. Change directory:
```bash
cd file-manager
```
3. Change branch
```bash
git checkout develop
```
## Usage

The program is started by `npm script` in the following way:

```bash
npm run start -- --username=your_username
```

After starting app, the following text is displayed in the console:

```txt
Welcome to the File Manager, your_username!
```
To see all commands in the app, please press the `TAB` button.

```bash
FM> 
.exit   add   cat   cd    compress    cp    decompress    hash    ls    mv    os    rm    rn    up
```

You can also start writing a command and press the `TAB` button to automatically complete the command.

```bash
FM> c
cat   cd    compress    cp
```

To reach a file or directory path, **you don't need** to write the path in single quotes `'path/directory'`, double quotes `"path/directory/file.txt"` or backticks.

```bash
FM> compress src/text.txt files/text.br
```

To exit the app, please press `ctrl + c` or enter the `.exit` command in the app.

## Examples

* Navigation & working directory (nwd):
  * Go upper from current directory
    ```bash
    up
    ```
  * Go to dedicated folder from current directory
    ```bash
    cd path_to_directory
    ```
  * Print in console list of all files and folders in current directory
    ```bash
    ls
    ```
* Basic operations with files:
  * Read file
    ```bash
    cat path_to_file
    ```
  * Create empty file in current working directory
    ```bash
    add new_file_name
    ```
  * Rename file
    ```bash
    rn path_to_file new_filename
    ```
  * Copy file
    ```bash
    cp path_to_file path_to_new_directory
    ```
  * Move file
    ```bash
    mv path_to_file path_to_new_directory
    ```
  * Delete file
    ```bash
    rm path_to_file
    ```
* Operating system info:
  * Get EOL
    ```bash
    os --EOL
    ```
  * Get host machine CPUs info
    ```bash
    os --cpus
    ```
  * Get home directory
    ```bash
    os --homedir
    ```
  * Get current system username
    ```bash
    os --username
    ```
  * Get CPU architecture
    ```bash
    os --architecture
    ```
* Hash operations:
  * Calculate hash for file
    ```bash
    hash path_to_file
    ```
* Zip operations:
  * Compress file
    ```bash
    compress path_to_file path_to_destination
    ```
  * Decompress file
    ```bash
    decompress path_to_file path_to_destination
    ```