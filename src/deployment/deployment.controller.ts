import { Controller, Post, Body } from '@nestjs/common';
import { DeploymentService } from './deployment.service';

@Controller('deployment')
export class DeploymentController {
  constructor(private readonly deploymentService: DeploymentService) {}

  @Post('deploy')
  async deployContainer(
    @Body('containerName') containerName: string,
    @Body('server') server: string,
    @Body('port') port: number,
  ) {
    await this.deploymentService.deployContainer(containerName, server, port);
    return { message: 'Container deployed successfully.' };
  }

  @Post('configure-nginx')
  async configureNginx(
    @Body('domain') domain: string,
    @Body('subdomain') subdomain: string,
    @Body('root') root: string,
  ) {
    await this.deploymentService.configureNginx(domain, subdomain, root);
    return { message: 'Nginx configured successfully.' };
  }
}
