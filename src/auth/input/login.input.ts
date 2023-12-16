import { Field, InputType } from '@nestjs/graphql';
import { TokenOutput } from './token.output';

@InputType()
export class LoginInput {
  @Field()
  username: string;

  @Field()
  password: string;
}
