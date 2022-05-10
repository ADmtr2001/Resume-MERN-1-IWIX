import { BadRequestError, NotFoundError } from "../errors";

import { Comment } from "../models";

class categoryService {
  async getAllComments() {
    const comments = await Comment.find({});
    return comments;
  }

  async createComment(from: string, to: string, text: string, rating: number) {
    const comment = await Comment.create({ from, to, text, rating });
    return comment;
  }

  async getSingleComment(commentId: string) {
    const comment = await Comment.findOne({ _id: commentId });
    if (!comment) {
      throw new NotFoundError(`No comment with id: ${commentId}`);
    }
    return comment;
  }

  async updateComment(commentId: string, text: string, rating: number) {
    const comment = await Comment.findOneAndUpdate(
      { _id: commentId },
      { text, rating },
      { new: true, runValidators: true }
    );
    return comment;
  }

  async deleteComment(commentId: string) {
    const comment = await Comment.deleteOne({ _id: commentId });
    return comment;
  }

  async getAllUserComments(userId: string) {
    const comments = await Comment.find({ to: userId });
    return comments;
  }

  async checkIfAlreadyExist(from: string, to: string) {
    const comment = await Comment.findOne({ from, to });
    if (comment) {
      throw new BadRequestError("Already submitted comment for this user");
    }
    return comment;
  }
}

export default new categoryService();
