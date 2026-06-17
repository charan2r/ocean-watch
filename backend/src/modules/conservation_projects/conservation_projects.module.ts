import { Module } from '@nestjs/common';
import { ConservationProjectsService } from './conservation_projects.service';
import { ConservationProjectsController } from './conservation_projects.controller';

@Module({
  controllers: [ConservationProjectsController],
  providers: [ConservationProjectsService],
})
export class ConservationProjectsModule {}
