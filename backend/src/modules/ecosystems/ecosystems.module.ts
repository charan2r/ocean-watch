import { Module } from '@nestjs/common';
import { EcosystemsService } from './ecosystems.service';
import { EcosystemsController } from './ecosystems.controller';

@Module({
  controllers: [EcosystemsController],
  providers: [EcosystemsService],
})
export class EcosystemsModule {}
