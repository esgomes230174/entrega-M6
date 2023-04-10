import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { Photo } from "../../entities/photo.entity";
import { AppError } from "../../errors/appError";
import { IAnnouncementUpdate } from "../../interfaces/announcement.interfaces";

const updateAnnouncementService = async (
  id: string,
  annoucement: IAnnouncementUpdate
): Promise<Announcement> => {
  const announcementRepository = AppDataSource.getRepository(Announcement);
  const vehicleImagesRepository = AppDataSource.getRepository(Photo);
  const findAnnouncement = await announcementRepository.findOneBy({ id });

  if (!findAnnouncement) {
    throw new AppError("Announcement id not found or not exists", 404);
  }

  const { photos, ...vehicleData } = annoucement;

  await announcementRepository.update(findAnnouncement.id, {
    announcement_type: annoucement.announcement_type
      ? annoucement.announcement_type
      : findAnnouncement.announcement_type,

    title: annoucement.title ? annoucement.title : findAnnouncement.title,

    year: annoucement.year ? annoucement.year : findAnnouncement.year,

    mileage: annoucement.mileage
      ? annoucement.mileage
      : findAnnouncement.mileage,

    price: annoucement.price ? annoucement.price : findAnnouncement.price,

    description: annoucement.description
      ? annoucement.description
      : findAnnouncement.description,

    is_published: annoucement.is_published
      ? annoucement.is_published
      : findAnnouncement.is_published,

    vehicle_type: annoucement.vehicle_type
      ? annoucement.vehicle_type
      : findAnnouncement.vehicle_type,

    cover_img: annoucement.cover_img
      ? annoucement.cover_img
      : findAnnouncement.cover_img,
  });

  if (photos) {
    await vehicleImagesRepository.delete({
      announcement: { id: findAnnouncement.id },
    });

    photos.map(async (url) => {
      const photo = vehicleImagesRepository.create({
        url,
        announcement: findAnnouncement,
      });

      await vehicleImagesRepository.save(photo);
    });
  }

  const updatedAnnouncement = await announcementRepository.findOneBy({ id });

  return updatedAnnouncement!;
};

export default updateAnnouncementService;
