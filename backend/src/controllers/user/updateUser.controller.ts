import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";

import { IUserUpdate } from "../../interfaces/user.interfaces";
import updateUserService from "../../services/user/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
  const { id } = req.user;
  const user: IUserUpdate = req.body;

  const updatedUser = await updateUserService(id, user);

  return res.status(200).json(instanceToPlain(updatedUser));
};

export default updateUserController;
