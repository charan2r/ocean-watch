import { PartialType } from '@nestjs/mapped-types';
import { CreateConservationProjectDto } from './create-conservation_project.dto';

export class UpdateConservationProjectDto extends PartialType(CreateConservationProjectDto) {}
