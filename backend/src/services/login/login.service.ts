import "dotenv/config";
import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";

import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { User } from "../../entities/user.entity";
import { IUserLogin } from "../../interfaces/user.interfaces";

const loginService = async (data: IUserLogin): Promise<string> => {
  const { email, password } = data;

  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({
    email,
  });

  if (!user) {
    throw new AppError("Invalid email or password", 403);
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid email or password", 403);
  }

  const token = jwt.sign(
    {
      email: user.email,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
      subject: user.id,
    }
  );

  return token;
};

export default loginService;
