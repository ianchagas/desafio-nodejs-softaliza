import { getCustomRepository } from "typeorm";
import { BlogspotsRepository } from "../repository/BlogspotsRepository";
import slugify from "slugify";


interface IBlogspotRequest {
    title: string;
    content: string;
    slug: string;
    created_by: string;
}

class CreateBlogspotService {
    async CreateBlog({title, content, slug, created_by}: IBlogspotRequest) {
        const blogspotRepository = getCustomRepository(BlogspotsRepository);

        if(!title) {
            throw new Error("Not a permissive create Blog without contents");
        }

        const SlugfyTitle = slugify(title);

        const blog = blogspotRepository.create({
            title,
            content,
            slug: SlugfyTitle,
            created_by
        })

        await blogspotRepository.save(blog);

        return blog;

    }
}

export { CreateBlogspotService }