import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AutqService } from './autq.service';
import { Autq } from './entities/autq.entity';
import { CreateAutqInput } from './dto/create-autq.input';
import { UpdateAutqInput } from './dto/update-autq.input';

@Resolver(() => Autq)
export class AutqResolver {
  constructor(private readonly autqService: AutqService) {}

  @Mutation(() => Autq)
  createAutq(@Args('createAutqInput') createAutqInput: CreateAutqInput) {
    return this.autqService.create(createAutqInput);
  }

  @Query(() => [Autq], { name: 'autq' })
  findAll() {
    return this.autqService.findAll();
  }

  @Query(() => Autq, { name: 'autq' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.autqService.findOne(id);
  }

  @Mutation(() => Autq)
  updateAutq(@Args('updateAutqInput') updateAutqInput: UpdateAutqInput) {
    return this.autqService.update(updateAutqInput.id, updateAutqInput);
  }

  @Mutation(() => Autq)
  removeAutq(@Args('id', { type: () => Int }) id: number) {
    return this.autqService.remove(id);
  }
}
