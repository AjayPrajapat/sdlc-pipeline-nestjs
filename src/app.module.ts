import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './@core/config/config.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { GitModule } from './git/git.module';
import { DependenciesModule } from './dependencies/dependencies.module';
import { DockerModule } from './docker/docker.module';
import { CiCdModule } from './ci-cd/ci-cd.module';
import { DeploymentModule } from './deployment/deployment.module';

@Module({
  imports: [
    ConfigModule,
    AuthModule,
    UsersModule,
    ProjectsModule,
    GitModule,
    DependenciesModule,
    DockerModule,
    CiCdModule,
    DeploymentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
