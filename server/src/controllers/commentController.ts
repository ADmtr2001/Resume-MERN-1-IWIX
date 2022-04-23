import { Request, Response, NextFunction } from "express";

class CommentController {
  async getAllComments(req: Request, res: Response, next: NextFunction) {
    res.send("Get All Comments");
  }

  async createComment(req: Request, res: Response, next: NextFunction) {
    res.send("Create Comment");
  }

  async getSingleComment(req: Request, res: Response, next: NextFunction) {
    res.send("Get Single Comment");
  }

  async updateComment(req: Request, res: Response, next: NextFunction) {
    res.send("Update Comment");
  }

  async deleteComment(req: Request, res: Response, next: NextFunction) {
    res.send("Delete Comment");
  }

  async getAllUserComments(req: Request, res: Response, next: NextFunction) {
    res.send("Get All User Comments");
  }
}

export default new CommentController();
