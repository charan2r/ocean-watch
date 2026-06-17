import { Injectable } from '@nestjs/common';
import { CreateCorrectionDto } from './dto/create-correction.dto';

@Injectable()
export class CorrectionsService {
  create(createCorrectionDto: CreateCorrectionDto) {
    return 'This action adds a new correction';
  }

  findAll() {
    return `This action returns all corrections`;
  }

  findOne(id: number) {
    return `This action returns a #${id} correction`;
  }

 
  remove(id: number) {
    return `This action removes a #${id} correction`;
  }
}
