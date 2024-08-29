import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType({ description: 'payments' })
export class PaymentModel {
  @Field()
  typeCredit: string;

  @Field()
  creditLimit: number;

  @Field(() => Int)
  creditUsed: number;

  @Field(() => Int)
  amountAvailable: number;
}
