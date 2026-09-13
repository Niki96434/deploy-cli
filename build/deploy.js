#!/usr/bin/env node
import { parseArgs } from 'node:util';
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
};
const { values } = parseArgs({ options });
console.log(values);
console.log('Ты запустил в первый раз свою утилиту!');
//# sourceMappingURL=deploy.js.map