import { Test, TestingModule } from '@nestjs/testing';
import { DependenciesController } from './dependencies.controller';

describe('DependenciesController', () => {
  let controller: DependenciesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DependenciesController],
    }).compile();

    controller = module.get<DependenciesController>(DependenciesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
