import { Request, Response } from "express";
import deleteAnnouncementService from "../../services/announcement/deleteAnnouncement.service";

const deleteAnnouncementController = async (req: Request, res: Response) => {
  const { id } = req.params;

  await deleteAnnouncementService(id);

  return res.status(201).send();
};

export default deleteAnnouncementController;
