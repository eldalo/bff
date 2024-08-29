import { Field, ObjectType, Int } from '@nestjs/graphql';

import { PortfolioItemPriceModel } from './price.model';

@ObjectType({ description: 'portfolios' })
export class PortfolioItemModel {
  @Field()
  sku: string;

  @Field()
  title: string;

  @Field()
  categoryId: string;

  @Field()
  category: string;

  @Field()
  brand: string;

  @Field()
  classification: string;

  @Field()
  unitsPerBox: string;

  @Field()
  minOrderUnits: string;

  @Field()
  packageDescription: string;

  @Field()
  packageUnitDescription: string;

  @Field()
  quantity_max_redeem: string;

  @Field()
  redeem_unit: string;

  @Field()
  order_reason_redeem: string;

  @Field()
  sku_redeem: boolean;

  @Field()
  country: string;

  @Field()
  customerCode: string;

  @Field()
  price: PortfolioItemPriceModel;

  @Field(() => Int)
  points: number;
}
