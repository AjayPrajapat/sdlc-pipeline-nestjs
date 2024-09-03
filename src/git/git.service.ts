import { Injectable } from '@nestjs/common';
import { SimpleGit, simpleGit } from 'simple-git';

@Injectable()
export class GitService {
  private readonly git: SimpleGit;

  constructor() {
    this.git = simpleGit();
  }

  async initRepo(repoUrl: string): Promise<void> {
    await this.git.init();
    await this.git.addRemote('origin', repoUrl);
  }

  async commitAndPush(message: string, branch: string = 'main'): Promise<void> {
    await this.git.add('.');
    await this.git.commit(message);
    await this.git.push('origin', branch);
  }

  async pull(branch: string = 'main'): Promise<void> {
    await this.git.pull('origin', branch);
  }
}
