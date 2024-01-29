import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PokemonsModule } from './pokemons/pokemons.module';
import { TypesModule } from './types/types.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.POSTGRES_URL,
      autoLoadEntities: true,
      synchronize: true,
      ssl: true,
    }),
    PokemonsModule,
    TypesModule,
  ],
})
export class AppModule {}
