import { CreateAutqInput } from './create-autq.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAutqInput extends PartialType(CreateAutqInput) {
  @Field(() => Int)
  id: number;
}
