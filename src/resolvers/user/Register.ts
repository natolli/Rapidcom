import { Arg, Mutation, Resolver } from "type-graphql";
import { RegisterInput } from "./register/RegisterInput";
// import bcrypt from 'bcryptjs'
import { User } from "../../entity/User";

@Resolver()
export class RegisterResolver {
  @Mutation(() => User)
  async register(
    @Arg("input") { email, username, password }: RegisterInput
  ): Promise<User> {
    // const hashedPassword = await bcrypt.

    const user = await User.create({
      username,
      email,
      password,
    }).save();

    return user;
  }
}
