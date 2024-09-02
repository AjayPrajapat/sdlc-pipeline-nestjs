import { Test, TestingModule } from '@nestjs/testing';
import { CiCdService } from './ci-cd.service';

describe('CiCdService', () => {
  let service: CiCdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CiCdService],
    }).compile();

    service = module.get<CiCdService>(CiCdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
