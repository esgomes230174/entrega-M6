import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";

const listAllWithoutLoginService = async (): Promise<Announcement[]> => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const announcements = await announcementRepository.find({
    relations: { user: true },
  });

  return announcements;
};

export default listAllWithoutLoginService;
