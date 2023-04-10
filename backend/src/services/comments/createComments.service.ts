import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { Comment } from "../../entities/comments.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const createCommentService = async (
  message: string,
  announcementId: string,
  userId: string
) => {
  const userRepository = AppDataSource.getRepository(User);
  const announcementRepository = AppDataSource.getRepository(Announcement);
  const commentRepository = AppDataSource.getRepository(Comment);

  const findUser = await userRepository.findOneBy({ id: userId });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  const findAnnouncement = await announcementRepository.findOneBy({
    id: announcementId,
  });

  if (!findAnnouncement) {
    throw new AppError("Announcement not found", 404);
  }

  const comment = commentRepository.create({
    message,
    announcement: findAnnouncement,
    user: findUser,
  });

  await commentRepository.save(comment);

  return comment;
};

export default createCommentService;
