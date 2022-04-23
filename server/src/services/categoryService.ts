import { NotFoundError } from "../errors";
import { Category } from "../models";

class categoryService {
  async createCategory(name: string, image: string) {
    const category = await Category.create({ name, image });
    return category;
  }

  async getAllCategories() {
    const categories = await Category.find({});
    return categories;
  }

  async getSingleCategory(categoryId: string) {
    const category = await Category.findOne({ _id: categoryId });
    if (!category) {
      throw new NotFoundError(`No category with id: ${categoryId}`);
    }
    return category;
  }

  async deleteCategory(categoryId: string) {
    const category = await Category.deleteOne({ _id: categoryId });
    return category;
  }
}

export default new categoryService();
