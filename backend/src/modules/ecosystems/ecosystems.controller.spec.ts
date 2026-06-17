import { Test, TestingModule } from '@nestjs/testing';
import { EcosystemsController } from './ecosystems.controller';
import { EcosystemsService } from './ecosystems.service';

describe('EcosystemsController', () => {
  let controller: EcosystemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EcosystemsController],
      providers: [EcosystemsService],
    }).compile();

    controller = module.get<EcosystemsController>(EcosystemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
