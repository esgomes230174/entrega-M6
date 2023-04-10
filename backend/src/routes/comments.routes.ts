import { Router } from "express";
import createCommentController from "../controllers/comments/createComment.controller";
import deleteCommentController from "../controllers/comments/deleteComment.controller";
import listCommentController from "../controllers/comments/listComment.controller";
import updateCommentController from "../controllers/comments/updateComment.controller";

import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import verifyCommentOwner from "../middlewares/verifyCommentOwner.middleware";

const commentsRoutes = Router();

commentsRoutes.post("/:id", ensureAuthMiddleware, createCommentController);
commentsRoutes.get("/:id", listCommentController);
commentsRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  verifyCommentOwner,
  updateCommentController
);
commentsRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  verifyCommentOwner,
  deleteCommentController
);

export default commentsRoutes;
