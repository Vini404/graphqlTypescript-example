import { Field, ObjectType, InputType } from 'type-graphql'

@ObjectType()
export class User {
  @Field()
  id: string

  @Field()
  name: string

  @Field()
  email: string

  @Field()
  description: string
}

@InputType()
export class UserInput implements Partial<User> {
    @Field()
    name: string
  
    @Field()
    email: string
  
    @Field()
    description: string
  }
