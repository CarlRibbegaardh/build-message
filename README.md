# build-message
> Build message banner for information messages during multi stage builds.

## Table of Contents

- [Description](##Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Options](#Options)
- [CLI](#CLI)



## Description

Use **build-message** when you have a multistep build and want to be able to quickly identify the current build step or some other important information in long logs. The message that you log using **build-message** is formatted with a 4 character prefix spacing and a dashed line 8 characters longer than the message. Like this:

<pre>
----------------------------------
    my important build message
----------------------------------
</pre>
If the message is really long, the terminal width will be the max width, or 80 characters if the terminal width isn't discoverable. The build message will be split (if possible on spaces) at a relevant position.
If possible **build-message** tries to insert 4 spaces before the text, but will accomodate to the available space.

Example with 16 character width terminal:
<pre>
-----------------
 my long and
 important build
 message on a
 very small
 terminal
-----------------
</pre>


## Installation
Intended to install in the root package of a monorepo.

```
npm install build-message --save-dev
```

or

```
yarn add -D build-message
```

## Usage
The standard usage is to use in a "pre" or "post" npm script. <br/>
see: https://docs.npmjs.com/cli/v8/using-npm/scripts#pre--post-scripts

Here's some standard package.json examples:

### yarn+CRA
```
"prebuild": "yarn build-message building client",
"build": "react-scripts build",
```
### npm+rollup
```
"prebuild": "npm build-message building library x",
"build": "rollup",
```

## CLI
The **build-message** tool can be used from the cli for testing it's functionality.

### CLI Useage

```
$ build-message <message> | [options]

$ scopy --help
$ scopy -v
```

- `message`  The message that you want logged in a banner format.
- `[options]`
  - `-v` , `--version`    Print version and quit.
  - `-h` , `--help`  Print help and quit


### CLI Examples

Examples : 

```bash
$ build-message building main
---------------------
    building main
---------------------

$ build-message debug build
-------------------
    debug build
-------------------
```


