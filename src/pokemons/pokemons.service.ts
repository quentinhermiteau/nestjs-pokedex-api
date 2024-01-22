import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, ILike, Repository } from 'typeorm';

import { Pokemon } from './entities/pokemon.entity';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
  ) {}

  create(data: Pokemon) {
    return this.pokemonRepository.save(data);
  }

  findAll({
    page = 1,
    typeId = null,
    name = null,
  }: {
    page: number;
    typeId: number | null;
    name: string | null;
  }): Promise<Pokemon[]> {
    const options: FindManyOptions<Pokemon> = {
      relations: ['types'],
      order: { pokedexId: 'ASC' },
    };

    const where: any = {};

    if (typeId) {
      where.types = {
        id: typeId,
      };
    }

    if (name) {
      where.name = ILike(`%${name}%`);
    }

    options.where = where;

    if (!typeId && !name) {
      options.take = 50;
      options.skip = 50 * (page - 1);
    }

    return this.pokemonRepository.find(options);
  }
}
