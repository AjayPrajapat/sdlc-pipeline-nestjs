import { Controller, Post, Body } from '@nestjs/common';
import { DockerService } from './docker.service';

@Controller('docker')
export class DockerController {
  constructor(private readonly dockerService: DockerService) {}

  @Post('build')
  async buildImage(@Body('dockerfile') dockerfile: string, @Body('tag') tag: string) {
    await this.dockerService.buildImage(dockerfile, tag);
    return { message: 'Docker image built successfully.' };
  }

  @Post('run')
  async runContainer(
    @Body('image') image: string,
    @Body('name') name: string,
    @Body('ports') ports: { hostPort: number, containerPort: number }[]
  ) {
    await this.dockerService.runContainer(image, name, ports);
    return { message: 'Docker container started successfully.' };
  }

  @Post('stop')
  async stopContainer(@Body('name') name: string) {
    await this.dockerService.stopContainer(name);
    return { message: 'Docker container stopped successfully.' };
  }

  @Post('remove')
  async removeContainer(@Body('name') name: string) {
    await this.dockerService.removeContainer(name);
    return { message: 'Docker container removed successfully.' };
  }
}
