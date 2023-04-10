import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import listAllWithoutLoginService from "../../services/announcement/listAllWithoutLogin.service";

const listAllWithoutLoginController = async (req: Request, res: Response) => {
  const annoucement = await listAllWithoutLoginService();

  return res.status(200).json(instanceToPlain(annoucement));
};

export default listAllWithoutLoginController;
