import { Test, TestingModule } from '@nestjs/testing';
import { EcosystemsService } from './ecosystems.service';

describe('EcosystemsService', () => {
  let service: EcosystemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EcosystemsService],
    }).compile();

    service = module.get<EcosystemsService>(EcosystemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
