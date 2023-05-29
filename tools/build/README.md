# DuAEF Build tools

This folder contains all which is needed to build the framework and its doc.

You'll need to install these first:

- [DuBuilder](https://github.com/Rainbox-dev/DuAEF_DuBuilder), and add its path to the PATH environment variable.
- [nodejs](https://nodejs.org/en/)
- [jsdoc](https://jsdoc.app/), installed with nodejs `npm install -g jsdoc`
- Authorize jsdoc to run from powershell: `Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope CurrentUser`
- Install the better-docs theme for jsdoc: `npm install --save-dev better-docs`
- Install the tsd-jsdoc theme for jsdoc: `npm install --save-dev tsd-jsdoc`

Just run the `build.bat` script on *Windows* to build DuESF and the doc. The build will be in an `output` subfolder.

Note: you'll need an executable binary of [DuBuilder](https://github.com/Rainbox-dev/DuAEF_DuBuilder), and its containing folder in the PATH variable of *Windows*.
