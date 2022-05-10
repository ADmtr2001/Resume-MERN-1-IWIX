import { Request, Response } from "express";

import { StatusCodes } from "http-status-codes";

import { commentService } from "../services";

import { checkPermission } from "../utils";

class CommentController {
  async getAllComments(req: Request, res: Response) {
    const comments = await commentService.getAllComments();
    res.status(StatusCodes.OK).json(comments);
  }

  async createComment(req: Request, res: Response) {
    const { to, text, rating } = req.body;

    await commentService.checkIfAlreadyExist(req.user.id, to);

    const comment = await commentService.createComment(
      req.user._id,
      to,
      text,
      rating
    );

    res.status(StatusCodes.CREATED).json(comment);
  }

  async getSingleComment(req: Request, res: Response) {
    const { id } = req.params;
    const comment = await commentService.getSingleComment(id);
    res.status(StatusCodes.OK).json(comment);
  }

  async updateComment(req: Request, res: Response) {
    const { id } = req.params;
    const { text, rating } = req.body;

    const previousComment = await commentService.getSingleComment(id);
    checkPermission(req.user, previousComment.from);

    const updatedComment = await commentService.updateComment(id, text, rating);

    res.status(StatusCodes.OK).json({ comment: updatedComment });
  }

  async deleteComment(req: Request, res: Response) {
    const { id } = req.params;

    const comment = await commentService.getSingleComment(id);
    checkPermission(req.user, comment.from);

    await commentService.deleteComment(id);

    res
      .status(StatusCodes.OK)
      .json({ success: true, message: "Product removed" });
  }

  async getAllUserComments(req: Request, res: Response) {
    const { id } = req.params;
    const comments = await commentService.getAllUserComments(id);
    res.status(StatusCodes.OK).json(comments);
  }
}

export default new CommentController();
