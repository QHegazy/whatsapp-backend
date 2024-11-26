import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAutqInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
