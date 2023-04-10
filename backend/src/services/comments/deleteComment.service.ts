import AppDataSource from "../../data-source";
import { Comment } from "../../entities/comments.entity";
import { AppError } from "../../errors/appError";

const deleteCommentService = async (id: string): Promise<void> => {
  const commentRepository = AppDataSource.getRepository(Comment);

  const findComment = await commentRepository.findOneBy({ id });

  if (!findComment) {
    throw new AppError("Comment not found", 404);
  }

  await commentRepository.delete({ id: id });
};

export default deleteCommentService;
