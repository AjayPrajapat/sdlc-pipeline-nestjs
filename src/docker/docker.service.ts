import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

@Injectable()
export class DockerService {
  async buildImage(dockerfile: string, tag: string): Promise<void> {
    const buildCommand = `docker build -t ${tag} -f ${dockerfile} .`;
    await execPromise(buildCommand);
  }

  async runContainer(image: string, name: string, ports: { hostPort: number, containerPort: number }[]): Promise<void> {
    const portMappings = ports.map(port => `-p ${port.hostPort}:${port.containerPort}`).join(' ');
    const runCommand = `docker run --name ${name} ${portMappings} -d ${image}`;
    await execPromise(runCommand);
  }

  async stopContainer(name: string): Promise<void> {
    const stopCommand = `docker stop ${name}`;
    await execPromise(stopCommand);
  }

  async removeContainer(name: string): Promise<void> {
    const removeCommand = `docker rm ${name}`;
    await execPromise(removeCommand);
  }
}
