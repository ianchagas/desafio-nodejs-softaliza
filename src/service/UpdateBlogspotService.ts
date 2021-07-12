import { getCustomRepository } from "typeorm";
import { BlogspotsRepository } from "../repository/BlogspotsRepository";
import { Blogspots } from "../model/Blogspots";
import slugify from "slugify";

interface IUpdateBlogspot {
    title: string;
    content: string;
    slug: string;
    created_by: string;
}

class UpdateBlogspotService {

    async UpdateBlog({title, content, slug, created_by}: IUpdateBlogspot) {
        const blogspotRepository = getCustomRepository(BlogspotsRepository);

        if(!title) {
            throw new Error("Not a Permissive create blog without title");
        }

        const SlugfyTitle = slugify(title, {
            replacement: '-',
            remove: undefined,
            lower: true,
            strict: true
        });

        const BlogUpdate = blogspotRepository.createQueryBuilder()
            .update(Blogspots)
            .set({title, content, slug:SlugfyTitle, created_by})
            .where("slug = :slug",{
                slug
            })
            .execute()

        return BlogUpdate;
    }
}

export { UpdateBlogspotService }