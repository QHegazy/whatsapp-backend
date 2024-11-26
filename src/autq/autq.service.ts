import { Injectable } from '@nestjs/common';
import { CreateAutqInput } from './dto/create-autq.input';
import { UpdateAutqInput } from './dto/update-autq.input';

@Injectable()
export class AutqService {
  create(createAutqInput: CreateAutqInput) {
    return 'This action adds a new autq';
  }

  findAll() {
    return `This action returns all autq`;
  }

  findOne(id: number) {
    return `This action returns a #${id} autq`;
  }

  update(id: number, updateAutqInput: UpdateAutqInput) {
    return `This action updates a #${id} autq`;
  }

  remove(id: number) {
    return `This action removes a #${id} autq`;
  }
}
