import { Request, Response } from "express";
import forgotPasswordService from "../../services/login/forgotPassword.service";

const forgotPasswordController = async (req: Request, res: Response) => {
  const { email } = req.body;
  await forgotPasswordService(email);

  return res.status(200).json({ message: "The email has been sent!" });
};

export default forgotPasswordController;
