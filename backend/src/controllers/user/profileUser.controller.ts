import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import profileUserService from "../../services/user/profileUser.service";

const profileUserController = async (req: Request, res: Response) => {
  const { id } = req.user;
  const user = await profileUserService(id);

  return res.status(200).json(instanceToPlain(user));
};

export default profileUserController;
