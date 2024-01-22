import { ApiProperty } from '@nestjs/swagger';
import { Evolution, Stats, Types } from 'src/interfaces';

export class PokemonDto {
  @ApiProperty()
  public id: number;

  @ApiProperty()
  public pokedexId: number;

  @ApiProperty()
  public name: string;

  @ApiProperty()
  public image: string;

  @ApiProperty()
  public sprite: string;

  @ApiProperty()
  public stats: Stats;

  @ApiProperty()
  public types: Types[];

  @ApiProperty()
  public generation: number;

  @ApiProperty()
  public evolutions: Evolution[];
}
