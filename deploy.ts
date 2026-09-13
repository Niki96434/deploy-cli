#!/usr/bin/env node
import { parseArgs, type ParseArgsOptionsType } from 'node:util';

const options = {
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

const { values } = parseArgs({ options });
console.log('Ты запустил в первый раз свою утилиту!');
console.log(values);
