import { Controller, Get } from '@nestjs/common';
import { TypesService } from './types.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { TypeDto } from './dto/types.dto';

@Controller('types')
@ApiTags('types')
export class TypesController {
  constructor(private readonly typesService: TypesService) {}

  @Get()
  @ApiResponse({ type: [TypeDto] })
  findAll() {
    return this.typesService.findAll();
  }
}
