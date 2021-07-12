import { getCustomRepository } from "typeorm";
import { BlogspotsRepository } from "../repository/BlogspotsRepository";

class ListAllBlogspotService {
    async ListAll() {
        const blogspotRepository = getCustomRepository(BlogspotsRepository);

        const ListBlogs = await blogspotRepository.find();

        return ListBlogs;
    }
}

export { ListAllBlogspotService }