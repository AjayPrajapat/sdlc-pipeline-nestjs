import { Test, TestingModule } from '@nestjs/testing';
import { CiCdController } from './ci-cd.controller';

describe('CiCdController', () => {
  let controller: CiCdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CiCdController],
    }).compile();

    controller = module.get<CiCdController>(CiCdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
