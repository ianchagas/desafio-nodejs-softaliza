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
        /**
         * Se não tiver um titulo não vai poder criar um novo blog
         */
        if(!title) {
            throw new Error("It will not be allowed to create an untitled blog");
        }

        /**
         * Faz a conversão do title utilizando a lib de slugify
         * O replacement eu escolhi '-' para ser exatamente semelhante a um link, bem como o "lower case"
         */
        const SlugfyTitle = slugify(title, {
            replacement: '-',
            remove: undefined,
            lower: true,
            strict: true
        });

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