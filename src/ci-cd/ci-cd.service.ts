import { Injectable } from '@nestjs/common';
import { writeFile } from 'fs/promises';

@Injectable()
export class CiCdService {
  async createPipelineConfig(filePath: string, configContent: string): Promise<void> {
    await writeFile(filePath, configContent);
  }
}
