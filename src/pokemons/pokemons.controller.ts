import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

import { PokemonService } from './pokemons.service';
import { Pokemon } from './entities/pokemon.entity';
import { PokemonDto } from './dto/pokemons.dto';

@Controller('pokemons')
@ApiTags('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  @ApiQuery({ name: 'page', type: Number, required: false })
  @ApiQuery({ name: 'typeId', type: Number, required: false })
  @ApiQuery({ name: 'name', type: String, required: false })
  @ApiResponse({
    description: 'Get all pokemons',
    type: [PokemonDto],
    status: HttpStatus.OK,
  })
  findAll(@Query() query): Promise<Pokemon[]> {
    return this.pokemonService.findAll(query);
  }
}
