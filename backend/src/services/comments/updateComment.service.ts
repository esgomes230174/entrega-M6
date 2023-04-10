import AppDataSource from "../../data-source";
import { Comment } from "../../entities/comments.entity";
import { AppError } from "../../errors/appError";

const updateCommentService = async (
  id: string,
  comment: string
): Promise<Comment> => {
  const commentRepository = AppDataSource.getRepository(Comment);
  const findComment = await commentRepository.findOneBy({ id });

  if (!findComment) {
    throw new AppError("Comment not found", 404);
  }

  await commentRepository.update(id, {
    message: comment ? comment : findComment.message,
    created_at: new Date(),
  });

  const newComment = await commentRepository.findOneBy({ id });

  return newComment!;
};

export default updateCommentService;
