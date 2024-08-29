import { Field, ObjectType, Int } from '@nestjs/graphql';

import { PaymentModel } from './payment.model';
import { CustomerGroupModel } from './customer-group.model';

@ObjectType({ description: 'clients' })
export class ClientModel {
  @Field()
  uuid: string;

  @Field()
  address: string;

  @Field()
  blocked: string;

  @Field()
  cellPhone: string;

  @Field()
  channel: string;

  @Field()
  country: string;

  @Field()
  customerGroups: CustomerGroupModel;

  @Field(() => Int)
  customerSchema: number;

  @Field()
  distrChan: string;

  @Field()
  division: string;

  @Field()
  fiscalCode1: string;

  @Field()
  fiscalCode2: string;

  @Field()
  frequency: string;

  @Field()
  frequencyDays: string;

  @Field()
  idPortfolio: string;

  @Field()
  immediateDelivery: string;

  @Field()
  industryCode: string;

  @Field()
  industryCode1: string;

  @Field()
  isEnrollment: boolean;

  @Field()
  name: string;

  @Field()
  name2: string;

  @Field()
  office: string;

  @Field()
  paymentCondition: string;

  @Field()
  paymentMethods: [PaymentModel];

  @Field()
  priceGroup: string;

  @Field()
  priceList: string;

  @Field()
  routeId: string;

  @Field()
  salesOrg: string;

  @Field()
  supplyCenter: string;

  @Field()
  vendorGroup: string;
}
