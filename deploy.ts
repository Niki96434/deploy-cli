#!/usr/bin/env node
import { parseArgs, type ParseArgsOptionsType } from 'node:util';

const options = {
  build: {
    type: 'boolean',
    multiple: false,
    short: 'b',
  },
  connect: {
    type: 'boolean',
    multiple: false,
    short: 'c',
  },
  deploy: {
    type: 'boolean',
    multiple: false,
    short: 'd',
  },
} as const;

const { tokens } = parseArgs({ options, tokens: true });

tokens
  .filter(token => token.kind === 'option')
  .forEach(token => {
    switch (token.name) {
      case 'build':
        console.log('build');
        break;
      case 'connect':
        console.log('connect');
        break;
      case 'deploy':
        console.log('deploy');
        break;
      default:
        console.log('такой команды нет');
    }
  });
