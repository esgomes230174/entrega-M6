import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import listAnnouncementByIdService from "../../services/announcement/listAnnouncementById.service";

const listAnnouncementByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const announcement = await listAnnouncementByIdService(id);

  return res.status(200).json(instanceToPlain(announcement));
};

export default listAnnouncementByIdController;
