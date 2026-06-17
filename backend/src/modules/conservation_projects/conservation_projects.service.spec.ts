import { Test, TestingModule } from '@nestjs/testing';
import { ConservationProjectsService } from './conservation_projects.service';

describe('ConservationProjectsService', () => {
  let service: ConservationProjectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConservationProjectsService],
    }).compile();

    service = module.get<ConservationProjectsService>(ConservationProjectsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
