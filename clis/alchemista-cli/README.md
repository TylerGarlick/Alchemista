alchemista-cli
==============

Alchemical Tooling

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/alchemista-cli.svg)](https://npmjs.org/package/alchemista-cli)
[![Downloads/week](https://img.shields.io/npm/dw/alchemista-cli.svg)](https://npmjs.org/package/alchemista-cli)
[![License](https://img.shields.io/npm/l/alchemista-cli.svg)](https://github.com/TylerGarlick/Alchemista/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g alchemista-cli
$ alchemist COMMAND
running command...
$ alchemist (-v|--version|version)
alchemista-cli/0.0.0 linux-x64 node-v14.15.1
$ alchemist --help [COMMAND]
USAGE
  $ alchemist COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`alchemist hello [FILE]`](#alchemist-hello-file)
* [`alchemist help [COMMAND]`](#alchemist-help-command)

## `alchemist hello [FILE]`

describe the command here

```
USAGE
  $ alchemist hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ alchemist hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/TylerGarlick/Alchemista/blob/v0.0.0/src/commands/hello.ts)_

## `alchemist help [COMMAND]`

display help for alchemist

```
USAGE
  $ alchemist help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
