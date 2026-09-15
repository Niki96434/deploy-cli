import { readFile } from 'node:fs';

export default async function connect() {
  const serverData = readFile(
    '/home/nikki/.space-cli/config.json',
    { encoding: 'utf-8' },
    (err, data) => {
      if (err) throw err;
      console.log(data);
    }
  );
}
