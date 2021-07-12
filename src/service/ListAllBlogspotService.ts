import { getCustomRepository } from "typeorm";
import { BlogspotsRepository } from "../repository/BlogspotsRepository";

class ListAllBlogspotServices {
    async ListAll() {
        const blogspotRepository = getCustomRepository(BlogspotsRepository);

        const ListBlogs = await blogspotRepository.find();

        return ListBlogs;
    }
}

export { ListAllBlogspotServices }