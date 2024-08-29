import { Field, ObjectType } from '@nestjs/graphql';
import { PortfolioItemModel } from './item.model';

@ObjectType({ description: 'portfolios' })
export class PortfolioModel {
  @Field()
  uuid: string;

  @Field()
  channel: string;

  @Field()
  country: string;

  @Field()
  customerCode: string;

  @Field()
  items: [PortfolioItemModel];

  @Field()
  route: string;
}
