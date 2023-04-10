import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import createCommentService from "../../services/comments/createComments.service";

const createCommentController = async (req: Request, res: Response) => {
  const data = req.body.message;
  const announcement = req.params.id;
  const { id } = req.user;

  const comment = await createCommentService(data, announcement, id);

  return res.status(201).json(instanceToPlain(comment));
};

export default createCommentController;
