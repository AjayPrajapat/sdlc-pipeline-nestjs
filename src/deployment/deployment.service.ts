import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

@Injectable()
export class DeploymentService {
  async deployContainer(containerName: string, server: string, port: number): Promise<void> {
    const deployCommand = `ssh user@${server} "docker run -d --name ${containerName} -p ${port}:80 my-app-image"`;
    await execPromise(deployCommand);
  }

  async configureNginx(domain: string, subdomain: string, root: string): Promise<void> {
    const config = `
    server {
      listen 80;
      server_name ${subdomain}.${domain};

      location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
      }
    }
    `;
    const configCommand = `echo "${config}" > /etc/nginx/sites-available/${subdomain}.${domain} && ln -s /etc/nginx/sites-available/${subdomain}.${domain} /etc/nginx/sites-enabled/`;
    await execPromise(configCommand);
    await execPromise('nginx -s reload');
  }
}
