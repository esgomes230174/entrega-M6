import { Request, Response } from "express";
import resetPasswordService from "../../services/login/resetPassword.service";

const resetPasswordController = async (req: Request, res: Response) => {
  const { email, token, password } = req.body;
  await resetPasswordService(email, token, password);

  return res.status(200).send();
};

export default resetPasswordController;
