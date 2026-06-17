import { Test, TestingModule } from '@nestjs/testing';
import { ConservationProjectsController } from './conservation_projects.controller';
import { ConservationProjectsService } from './conservation_projects.service';

describe('ConservationProjectsController', () => {
  let controller: ConservationProjectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConservationProjectsController],
      providers: [ConservationProjectsService],
    }).compile();

    controller = module.get<ConservationProjectsController>(ConservationProjectsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
