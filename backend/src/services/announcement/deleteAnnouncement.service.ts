import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { AppError } from "../../errors/appError";

const deleteAnnouncementService = async (id: string): Promise<void> => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const announcement = await announcementRepository.findOneBy({ id });

  if (!announcement) {
    throw new AppError("Announcement id not found or not exists", 404);
  }

  await announcementRepository.delete({ id });
};

export default deleteAnnouncementService;
