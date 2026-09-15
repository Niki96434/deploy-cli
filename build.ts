import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { spawn } from 'node:child_process';

export default async function build(): Promise<void> {
  const rl = readline.createInterface({ input, output });

  const answer = await rl.question('Запустить сборку проекта с помощью `npm run build`? [y/n] ');
  rl.close();

  if (answer.toLowerCase() === 'y') {
    console.log('\nЗапуск сборки проекта...');
    return new Promise((resolve, reject) => {
      const secureCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';

      const buildProcess = spawn(secureCommand, ['run', 'build'], {
        shell: false,
        stdio: 'inherit',
      });

      buildProcess.on('close', code => {
        if (code === 0) {
          console.log('Процесс сборки завершился успешно');
          resolve();
        } else {
          reject(new Error('Процесс сборки завершился с ошибкой'));
        }
      });

      buildProcess.on('error', error => {
        reject(error);
      });
    });
  } else {
    console.log('Отмена запуска сборки');
    process.exit(0);
  }
}
