import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import listAllUserAnnouncementsService from "../../services/announcement/listAllUserAnnouncements.service";

const listAllUserAnnouncementsController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const listUser = await listAllUserAnnouncementsService(id);

  return res.status(200).json(instanceToPlain(listUser));
};

export default listAllUserAnnouncementsController;
