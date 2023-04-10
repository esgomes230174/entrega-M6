import AppDataSource from "../../data-source";
import { Comment } from "../../entities/comments.entity";
import { AppError } from "../../errors/appError";

const listCommentService = async (id: string): Promise<Comment[]> => {
  const commentRepository = AppDataSource.getRepository(Comment);

  const findComment = await commentRepository.find({
    relations: { announcement: true, user: true },
  });

  const commentList = findComment.filter(
    (comment) => comment.announcement.id === id
  );

  if (!commentList) {
    throw new AppError("comment not found", 404);
  }

  return commentList;
};

export default listCommentService;
