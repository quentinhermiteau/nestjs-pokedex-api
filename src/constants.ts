import { PaginateConfig } from 'nestjs-paginate';
import { Pokemon } from './pokemons/entities/pokemon.entity';

export const POKEMON_PAGINATION_CONFIG: PaginateConfig<Pokemon> = {
  loadEagerRelations: true,
  defaultLimit: 50,
  sortableColumns: ['pokedexId'],
  defaultSortBy: [['pokedexId', 'ASC']],
  searchableColumns: ['name', 'types.name'],
  filterableColumns: {
    'types.name': true,
  },
  select: [
    'id',
    'pokedexId',
    'name',
    'image',
    'sprite',
    'types',
    'stats',
    'generation',
    'evolutions',
  ],
};
