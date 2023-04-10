import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import listCommentService from "../../services/comments/listComments.service";

const listCommentController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const comment = await listCommentService(id);

  return res.status(200).json(instanceToPlain(comment));
};

export default listCommentController;
