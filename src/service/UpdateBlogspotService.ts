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

        /**
         * Se não tiver pelo menos um titulo não altera
         */

        if(!title) {
            throw new Error("It will not be allowed to create an untitled blog");
        }

        /**
         * Mesma funçãozinha de slug para o update, pois o usuário pode trocar o titulo
         * É necessário refazer o processo aqui novamente
         */
        const SlugfyTitle = slugify(title, {
            replacement: '-',
            remove: undefined,
            lower: true,
            strict: true
        });

        /**
         * Decidi utilizar os query Params para esse update como slug
         * Seguindo o mesmo conceito de buscar pelo slug
         */
        
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