import { Controller, Post, Body } from '@nestjs/common';
import { DependenciesService } from './dependencies.service';

@Controller('dependencies')
export class DependenciesController {
  constructor(private readonly dependenciesService: DependenciesService) {}

  @Post('install')
  async install(@Body('dependencies') dependencies: string[]) {
    await this.dependenciesService.installDependencies(dependencies);
    return { message: 'Dependencies installed successfully.' };
  }

  @Post('update')
  async update() {
    await this.dependenciesService.updateDependencies();
    return { message: 'Dependencies updated successfully.' };
  }
}
