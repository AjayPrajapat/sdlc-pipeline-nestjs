import { Module } from '@nestjs/common';
import { CiCdController } from './ci-cd.controller';
import { CiCdService } from './ci-cd.service';

@Module({
  controllers: [CiCdController],
  providers: [CiCdService]
})
export class CiCdModule {}
