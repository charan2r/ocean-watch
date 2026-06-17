import { Injectable } from '@nestjs/common';
import { CreateConservationProjectDto } from './dto/create-conservation_project.dto';
import { UpdateConservationProjectDto } from './dto/update-conservation_project.dto';

@Injectable()
export class ConservationProjectsService {
  create(createConservationProjectDto: CreateConservationProjectDto) {
    return 'This action adds a new conservationProject';
  }

  findAll() {
    return `This action returns all conservationProjects`;
  }

  findOne(id: number) {
    return `This action returns a #${id} conservationProject`;
  }

  update(id: number, updateConservationProjectDto: UpdateConservationProjectDto) {
    return `This action updates a #${id} conservationProject`;
  }

  remove(id: number) {
    return `This action removes a #${id} conservationProject`;
  }
}
