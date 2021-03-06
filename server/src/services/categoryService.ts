import { NotFoundError } from "../errors";

import { Category } from "../models";

class CategoryService {
  async getAllCategories() {
    const categories = await Category.find({ name: { $ne: "Any" } }).sort({
      createdAt: 1,
    });
    return categories;
  }

  async createCategory(name: string, image: string, imageId: string) {
    const category = await Category.create({ name, image, imageId });
    return category;
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

  async getSingleCategoryByName(name: string) {
    const category = await Category.findOne({ name });
    if (!category) {
      throw new NotFoundError(`No category with name: ${name}`);
    }
    return category;
  }
}

export default new CategoryService();
