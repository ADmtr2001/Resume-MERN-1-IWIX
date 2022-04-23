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
}

export default new categoryService();
