import { Query, Resolver, Mutation, Arg } from 'type-graphql'
import { User, UserInput } from '../schema/user'
import {randomBytes} from "crypto"
import {userModel} from "../models/UserModel"

@Resolver((of) => User)
export class UserResolver {

  @Query((returns) => [User], { nullable: true })
  async getUsers(): Promise<User[]> {
    const user = [{
      id:"",
      name:"vinicius",
      email:"vinicius_ochenr@hotmail.com",
      description:"ola"
    }]

    return user

      
    
  }

  @Mutation((returns) => User)
  async addUser(
    @Arg('data') { name,email, description }: UserInput
  ): Promise<User> {
    const user = {
      id: randomBytes(4).toString("hex"),
      name,
      email,
      description
    }
    
    await userModel.create({

    })
    
    return user
  }
}