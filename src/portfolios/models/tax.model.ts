import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'portfolios' })
export class PortfolioItemTaxModel {
  @Field()
  taxType: string;

  @Field()
  taxId: string;

  @Field(() => Int)
  rate: number;
}
