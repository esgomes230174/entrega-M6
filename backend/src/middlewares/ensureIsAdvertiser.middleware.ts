import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/appError";

const ensureIsAdvertiserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.user.id;
  const userRepository = AppDataSource.getRepository(User);
  const userExist = await userRepository.findOneBy({ id });

  if (userExist?.account !== "Anunciante") {
    throw new AppError("You are not an Advertiser", 401);
  }

  return next();
};

export default ensureIsAdvertiserMiddleware;
