import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Type } from './entities/type.entity';

@Injectable()
export class TypesService {
  constructor(
    @InjectRepository(Type)
    private readonly typeRepository: Repository<Type>,
  ) {}

  findAll() {
    return this.typeRepository.find();
  }

  findOne(id: number) {
    return this.typeRepository.findOneBy({ id });
  }
}
