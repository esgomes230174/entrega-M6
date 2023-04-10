import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/appError";
import { IUserRequest } from "../interfaces/user.interfaces";

const ensureEmailAlreadyExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email }: IUserRequest = req.body;
  const userRepository = AppDataSource.getRepository(User);
  const userExist = await userRepository.findOneBy({ email });

  if (userExist) {
    throw new AppError("Email already registered", 409);
  }

  return next();
};

export default ensureEmailAlreadyExistMiddleware;
