import { getCustomRepository } from "typeorm";
import { BlogspotsRepository } from "../repository/BlogspotsRepository";


/**
 * Lista todos, sem segredo
 * Quis implementar pq é facinho e praticamente todo sisteminha tem
 */

class ListAllBlogspotService {
    async ListAll() {
        const blogspotRepository = getCustomRepository(BlogspotsRepository);

        const ListBlogs = await blogspotRepository.find();

        return ListBlogs;
    }
}

export { ListAllBlogspotService }