#!/usr/bin/env node
import { parseArgs } from 'node:util';
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
};
const { tokens } = parseArgs({ options, tokens: true });
tokens
    .filter(token => token.kind === 'option')
    .forEach(token => {
    if (token.name === 'build') {
        console.log('build');
    }
    else if (token.name === 'connect') {
        console.log('connect');
    }
    else if (token.name === 'deploy') {
        console.log('deploy');
    }
    else {
        console.log('такой команды нет');
    }
});
//# sourceMappingURL=deploy.js.map