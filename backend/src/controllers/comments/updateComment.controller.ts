import { Request, Response } from "express";
import updateCommentService from "../../services/comments/updateComment.service";

const updateCommentController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const newComment: string = req.body.message;

  const updateComment = await updateCommentService(id, newComment);

  return res.status(200).json(updateComment);
};

export default updateCommentController;
