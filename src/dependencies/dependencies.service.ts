import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

@Injectable()
export class DependenciesService {
  async installDependencies(dependencies: string[]): Promise<void> {
    const installCommand = `npm install ${dependencies.join(' ')}`;
    await execPromise(installCommand);
  }

  async updateDependencies(): Promise<void> {
    await execPromise('npm update');
  }
}
