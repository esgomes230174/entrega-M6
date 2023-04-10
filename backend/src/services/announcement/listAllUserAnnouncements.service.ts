import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";

import { AppError } from "../../errors/appError";

const listAllUserAnnouncementsService = async (
  id: string
): Promise<Announcement[]> => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const findAnnouncement = await announcementRepository.find({
    where: { user: { id } },
    relations: { user: true },
  });

  if (!findAnnouncement) {
    throw new AppError("User not found or not exists", 404);
  }

  return findAnnouncement;
};

export default listAllUserAnnouncementsService;
