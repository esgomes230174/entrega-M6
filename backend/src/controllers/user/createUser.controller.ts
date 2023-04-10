import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";

import { IUserRequest } from "../../interfaces/user.interfaces";
import createUserService from "../../services/user/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  const user: IUserRequest = req.body;
  const address = req.body.address;
  const createdUser = await createUserService(user, address);

  return res.status(201).json(instanceToPlain(createdUser));
};

export default createUserController;
