#!/usr/bin/env node
import { parseArgs } from 'node:util';
import build from './build.js';
import { options } from './args.js';

function main() {
  try {
    const { tokens } = parseArgs({ options, tokens: true });

    tokens
      .filter(token => token.kind === 'option')
      .forEach(async token => {
        switch (token.name) {
          case 'build':
            await build();
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
  } catch (err) {
    console.log(err);
  }
}

main();
