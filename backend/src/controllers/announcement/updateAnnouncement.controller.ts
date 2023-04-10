import { Request, Response } from "express";
import updateAnnouncementService from "../../services/announcement/updateAnnouncement.service";

const updateAnnouncementController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  const announcement = await updateAnnouncementService(id, data);

  return res.status(201).json(announcement);
};

export default updateAnnouncementController;
