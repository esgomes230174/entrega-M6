import { userInfo } from "os";
import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { AppError } from "../../errors/appError";

const listAnnouncementByIdService = async (
  id: string
): Promise<Announcement> => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const findAnnouncement = await announcementRepository.findOne({
    where: { id },
    relations: { user: true, comments: { user: true } },
  });

  if (!findAnnouncement) {
    throw new AppError("Announcement id not found or not exists", 404);
  }

  return findAnnouncement;
};

export default listAnnouncementByIdService;
