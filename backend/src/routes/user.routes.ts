import { Router } from "express";

import ensureEmailAlreadyExistMiddleware from "../middlewares/ensureEmailAlreadyExist.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

import createUserController from "../controllers/user/createUser.controller";
import profileUserController from "../controllers/user/profileUser.controller";
import retrieveUserController from "../controllers/user/retrieveUser.controller";
import updateUserController from "../controllers/user/updateUser.controller";
import deleteUserController from "../controllers/user/deleteUser.controller";

const userRoutes = Router();

userRoutes.post("", ensureEmailAlreadyExistMiddleware, createUserController);
userRoutes.get("/profile", ensureAuthMiddleware, profileUserController);
userRoutes.get("/:id", retrieveUserController);
userRoutes.patch("", ensureAuthMiddleware, updateUserController);
userRoutes.delete("", ensureAuthMiddleware, deleteUserController);

export default userRoutes;
