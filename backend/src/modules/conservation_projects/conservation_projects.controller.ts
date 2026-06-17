import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConservationProjectsService } from './conservation_projects.service';
import { CreateConservationProjectDto } from './dto/create-conservation_project.dto';
import { UpdateConservationProjectDto } from './dto/update-conservation_project.dto';

@Controller('conservation-projects')
export class ConservationProjectsController {
  constructor(private readonly conservationProjectsService: ConservationProjectsService) {}

  @Post()
  create(@Body() createConservationProjectDto: CreateConservationProjectDto) {
    return this.conservationProjectsService.create(createConservationProjectDto);
  }

  @Get()
  findAll() {
    return this.conservationProjectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.conservationProjectsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConservationProjectDto: UpdateConservationProjectDto) {
    return this.conservationProjectsService.update(+id, updateConservationProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.conservationProjectsService.remove(+id);
  }
}
