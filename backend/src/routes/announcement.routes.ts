import { Router } from "express";
import createAnnouncementController from "../controllers/announcement/createAnnouncement.controllers";
import deleteAnnouncementController from "../controllers/announcement/deleteAnnouncement.controller";
import listAllUserAnnouncementsController from "../controllers/announcement/listAllUserAnnouncements.controller";
import listAllWithoutLoginController from "../controllers/announcement/listAllWithoutLogin.controller";
import listAnnouncementByIdController from "../controllers/announcement/listAnnouncementById.controller";
import updateAnnouncementController from "../controllers/announcement/updateAnnouncement.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdvertiserMiddleware from "../middlewares/ensureIsAdvertiser.middleware";

const announcementRoutes = Router();

announcementRoutes.post(
  "/",
  ensureAuthMiddleware,
  ensureIsAdvertiserMiddleware,
  createAnnouncementController
);

announcementRoutes.get("", listAllWithoutLoginController);
announcementRoutes.get("/:id", listAnnouncementByIdController);
announcementRoutes.get("/user/:id", listAllUserAnnouncementsController);

announcementRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureIsAdvertiserMiddleware,
  updateAnnouncementController
);
announcementRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsAdvertiserMiddleware,
  deleteAnnouncementController
);

export default announcementRoutes;
