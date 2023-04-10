import { Router } from "express";
import loginController from "../controllers/login/login.controller";
import forgotPasswordController from "../controllers/login/forgotPassword.controller";
import resetPasswordController from "../controllers/login/resetPassword.controller";

const loginRoutes = Router();

loginRoutes.post("", loginController);
loginRoutes.post("/forgot_password", forgotPasswordController);
loginRoutes.post("/reset_password", resetPasswordController);

export default loginRoutes;
