import { Injectable } from '@nestjs/common';
import { CreateEcosystemDto } from './dto/create-ecosystem.dto';
import { UpdateEcosystemDto } from './dto/update-ecosystem.dto';

@Injectable()
export class EcosystemsService {
  create(createEcosystemDto: CreateEcosystemDto) {
    return 'This action adds a new ecosystem';
  }

  findAll() {
    return `This action returns all ecosystems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ecosystem`;
  }

  update(id: number, updateEcosystemDto: UpdateEcosystemDto) {
    return `This action updates a #${id} ecosystem`;
  }

  remove(id: number) {
    return `This action removes a #${id} ecosystem`;
  }
}
