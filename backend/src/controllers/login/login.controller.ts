import { Request, Response } from "express";

import loginService from "../../services/login/login.service";
import { IUserLogin } from "../../interfaces/user.interfaces";

const loginController = async (req: Request, res: Response) => {
  const data: IUserLogin = req.body;
  const token = await loginService(data);

  return res.status(200).json({ token });
};

export default loginController;
