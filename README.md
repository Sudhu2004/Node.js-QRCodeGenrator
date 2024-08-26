# Node.js QR Code Generator

An asynchronous event-driven JavaScript runtime, Node.js is used to build scalable network applications.

- **Easy Scaling**
- **Fast and Non-Blocking** (asynchronous event-driven)
- **npm Ecosystem** (lots of resources)

## Installation Steps

1. Download from [Node.js](https://nodejs.org/en).
2. Run the installer (`.msi`) file.
3. Install all the packages.
4. Restart your computer (Node.js won't work otherwise).
5. Verify by running `node --version` on the CLI.

## Node REPL (Read-Eval-Print Loop)

Node REPL is a computer environment where user inputs are read, evaluated, and results are given back to the user.

- Run `node` in the CLI for verification.
- Run `.exit` to exit the code (or press `CTRL + C` twice).

## How to Use Native Node Modules

### Leverage Existing Node

Using CJS (CommonJS) Method:

- Importing module:
  - Use `require` to get the modules (you can find the modules in Node.js documentation).
  - Example: `const fs = require('fs');`

## Node Package Manager (NPM)

### How to Use Node Packages

We can use code libraries developed by other developers which might be useful for us.

1. Run `npm init` to initialize (this will create the `package.json` file).
2. Run `npm install <NameOfPackage>` to install packages (this will add the `<NameOfPackage>` to the dependencies list in the `package.json`).
3. `node_modules` will be created after installing a package.

### Printing in JavaScript

```javascript
const name = 'MyName';
console.log(`My name is ${name}.`);

### ECMAScript Modules

Standardized way of using JavaScript.

To use these methods, add the following key-value pair to `package.json`:

- `"type": "module"` (for ECMAScript)
- `"type": "commonjs"` (for CommonJS)

And then you can run the below:

```javascript
import generateName from 'sillyname';

## QR Code Generator

### Pre-setup

Initialize your project with the following command:

```bash
npm init -y

### Required NPM Packages

To generate a QR code, you'll need the following NPM packages:

- **`inquirer`**: To get inputs from the user.
- **`qr-image`**: To generate images and save the QR code as a PNG.

Install these packages using:

```bash
npm install inquirer qr-image
