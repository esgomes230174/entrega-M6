import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Comment } from "../entities/comments.entity";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/appError";

const verifyCommentOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.user;
  const commentId = req.params.id;
  const userRepository = AppDataSource.getRepository(User);
  const userExist = await userRepository.findOneBy({ id });

  const commentRepository = AppDataSource.getRepository(Comment);
  const findComment = await commentRepository.findOne({
    where: { id: commentId },
    relations: { user: true },
  });

  if (userExist?.id !== findComment?.user.id) {
    throw new AppError("Unauthorized", 401);
  }

  return next();
};

export default verifyCommentOwner;
