import { Evolution, Stats } from 'src/interfaces';
import { Type } from 'src/types/entities/type.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Pokemon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pokedexId: number;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  sprite: string;

  @Column({
    type: 'jsonb',
  })
  stats: Stats;

  @ManyToMany(() => Type, (type) => type.pokemons, {
    eager: true,
    cascade: true,
  })
  @JoinTable({
    name: 'pokemon_types',
    joinColumn: {
      name: 'pokemon_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'type_id',
      referencedColumnName: 'id',
    },
  })
  types: Type[];

  @Column()
  generation: number;

  @Column({
    type: 'jsonb',
  })
  evolutions: Evolution[];
}
