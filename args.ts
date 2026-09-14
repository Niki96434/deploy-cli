export const options = {
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
