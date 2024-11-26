import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Autq {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
