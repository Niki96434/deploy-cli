import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { spawn } from 'node:child_process';

export default async function build() {
  const rl = readline.createInterface({ input, output });

  const answer = await rl.question('Запустить сборку проекта с помощью `npm run build`? [y/n] ');
  rl.close();

  if (answer.toLowerCase() === 'y') {
    const secureCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';

    console.log('\nЗапуск сборки проекта...');
    const buildProcess = spawn(secureCommand, ['run', 'build'], { shell: false, stdio: 'inherit' });

    buildProcess.on('close', code => {
      if (code === 0) {
        console.log('Процесс сборки завершился успешно');
        return;
      }
      console.log(`Процесс сборки завершился с ошибкой`);
    });
  } else {
    console.log('Отмена сборки');
  }
}
