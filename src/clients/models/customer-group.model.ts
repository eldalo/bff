import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'customer_groups' })
export class CustomerGroupModel {
  @Field()
  group: string;

  @Field()
  group1: string;

  @Field()
  group2: string;

  @Field()
  group3: string;

  @Field()
  group4: string;

  @Field()
  group5: string;
}
