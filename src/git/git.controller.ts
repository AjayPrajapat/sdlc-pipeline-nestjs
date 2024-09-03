import { Controller, Post, Body } from '@nestjs/common';
import { GitService } from './git.service';

@Controller('git')
export class GitController {
  constructor(private readonly gitService: GitService) {}

  @Post('init')
  async initRepo(@Body('repoUrl') repoUrl: string) {
    await this.gitService.initRepo(repoUrl);
    return { message: 'Git repository initialized.' };
  }

  @Post('commit')
  async commitAndPush(@Body('message') message: string, @Body('branch') branch: string) {
    await this.gitService.commitAndPush(message, branch);
    return { message: 'Changes committed and pushed to the remote repository.' };
  }

  @Post('pull')
  async pull(@Body('branch') branch: string) {
    await this.gitService.pull(branch);
    return { message: 'Changes pulled from the remote repository.' };
  }
}
