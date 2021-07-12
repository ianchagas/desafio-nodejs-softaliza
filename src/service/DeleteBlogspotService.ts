import { getCustomRepository } from "typeorm";
import { BlogspotsRepository } from "../repository/BlogspotsRepository";
import { Blogspots } from "../model/Blogspots";

interface IDeleteBlogspot {
    slug: string;
}

class DeleteBlogspotService {

    async DeleteBlog({slug}: IDeleteBlogspot) {
        const blogspotRepository = getCustomRepository(BlogspotsRepository);

        const BlogDelete = blogspotRepository.createQueryBuilder()
            .delete()
            .from(Blogspots)
            .where("slug = :slug",{
                slug
            })
            .execute()

        return BlogDelete;
    }
}

export { DeleteBlogspotService }