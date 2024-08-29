import { Field, ObjectType } from '@nestjs/graphql';

import { PortfolioItemTaxModel } from './tax.model';

@ObjectType({ description: 'portfolios' })
export class PortfolioItemPriceModel {
  @Field()
  full_price: string;

  @Field()
  taxes: [PortfolioItemTaxModel];
}
