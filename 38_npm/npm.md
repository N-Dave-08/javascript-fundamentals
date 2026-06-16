# NPM (Node Package Manager)

## What is NPM?

NPM (Node Package Manager) is the default package manager for Node.js.
It is used to:

- Install libraries/packages
- Manage project dependencies
- Run scripts
- Share reusable code

---

## Checking NPM Version

```bash
npm -v
```

This shows the installed NPM version.

---

## Initializing a Project

```bash
npm init
```

Or quickly:

```bash
npm init -y
```

This creates a package.json file which contains project metadata and dependencies.

---

## package.json

Example:

{
  "name": "my-app",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {}
}

Important parts:
- name → project name
- version → project version
- scripts → custom commands
- dependencies → installed packages

---

## Installing Node.js (Using NVM)

### What is NVM?

NVM (Node Version Manager) allows you to install and manage multiple Node.js versions.

### Check NVM version

```bash
nvm -v
```

### Install Node.js

```bash
nvm install --lts
```

or specific version:

```bash
nvm install 18
```

### Use a Node version

```bash
nvm use 18
```

### Set default version

```bash
nvm alias default 18
```

### Check installed versions

```bash
nvm ls
```

### Check Node version

```bash
node -v
```

---

## Installing Packages

### Install a package

```bash
npm install lodash
```

### Global install

```bash
npm install -g nodemon
```

### Dev dependency

```bash
npm install --save-dev nodemon
```

---

## node_modules

node_modules/
Contains all installed dependencies.

Do NOT push to GitHub.

---

## package-lock.json

Locks exact dependency versions for consistency.

---

## Running Scripts

Example:

"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}

Run:

```bash
npm run start
npm run dev
```

---

## Uninstalling Packages

```bash
npm uninstall lodash
```

---

## Updating Packages

```bash
npm update
```

---

## Summary

- NVM → manages Node versions
- NPM → manages project packages
