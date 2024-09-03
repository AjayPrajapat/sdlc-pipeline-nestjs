import { Controller, Post, Body } from '@nestjs/common';
import { CiCdService } from './ci-cd.service';

@Controller('ci-cd')
export class CiCdController {
  constructor(private readonly ciCdService: CiCdService) {}

  @Post('pipeline')
  async createPipeline(@Body('filePath') filePath: string, @Body('configContent') configContent: string) {
    await this.ciCdService.createPipelineConfig(filePath, configContent);
    return { message: 'CI/CD pipeline configuration created successfully.' };
  }
}
