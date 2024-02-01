import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, ILike, Repository } from 'typeorm';

import { Pokemon } from './entities/pokemon.entity';

interface FindAllParams {
  page: number;
  limit: number;
  typeId: number | null;
  name: string | null;
}

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
    limit = 50,
    typeId = null,
    name = null,
  }: FindAllParams): Promise<Pokemon[]> {
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
      options.take = limit;
      options.skip = limit * (page - 1);
    }

    return this.pokemonRepository.find(options);
  }
}
