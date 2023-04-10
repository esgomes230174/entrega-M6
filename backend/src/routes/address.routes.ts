import { Router } from "express";
import updateAddressController from "../controllers/address/updateAddress.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const addressRoutes = Router();

addressRoutes.patch("/:id", ensureAuthMiddleware, updateAddressController);

export default addressRoutes;
