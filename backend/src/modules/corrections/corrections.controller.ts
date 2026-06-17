import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CorrectionsService } from './corrections.service';
import { CreateCorrectionDto } from './dto/create-correction.dto';

@Controller('corrections')
export class CorrectionsController {
  constructor(private readonly correctionsService: CorrectionsService) {}

  @Post()
  create(@Body() createCorrectionDto: CreateCorrectionDto) {
    return this.correctionsService.create(createCorrectionDto);
  }

  @Get()
  findAll() {
    return this.correctionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.correctionsService.findOne(+id);
  }

 

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.correctionsService.remove(+id);
  }
}
