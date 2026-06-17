import { Injectable } from '@nestjs/common';
import { CreateAiDto } from './dto/analyze-image.dto';

@Injectable()
export class AiService {
  create(createAiDto: CreateAiDto) {
    return 'This action adds a new ai';
  }

  findAll() {
    return `This action returns all ai`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ai`;
  }

 

  remove(id: number) {
    return `This action removes a #${id} ai`;
  }
}
