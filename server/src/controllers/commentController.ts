import { Request, Response } from "express";
import { commentService } from "../services";
import { checkPermission } from "../utils";

class CommentController {
  async getAllComments(req: Request, res: Response) {
    const comments = await commentService.getAllComments();
    res.json(comments);
  }

  async createComment(req: Request, res: Response) {
    const { to, text, rating } = req.body;
    const comment = await commentService.createComment(
      req.user.id,
      to,
      text,
      rating
    );
    res.json(comment);
  }

  async getSingleComment(req: Request, res: Response) {
    const { id } = req.params;
    const comment = await commentService.getSingleComment(id);
    res.json(comment);
  }

  async updateComment(req: Request, res: Response) {
    const { id } = req.params;
    const { text, rating } = req.body;
    const comment = await commentService.updateComment(id, text, rating);
    res.json(comment);
  }

  async deleteComment(req: Request, res: Response) {
    const { id } = req.params;
    checkPermission(req.user, id);
    const comment = await commentService.deleteComment(id);
    res.json(comment);
  }

  async getAllUserComments(req: Request, res: Response) {
    const { id } = req.params;
    const comments = await commentService.getAllUserComments(id);
    res.json(comments);
  }
}

export default new CommentController();
