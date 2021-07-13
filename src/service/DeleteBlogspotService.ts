import { getCustomRepository } from "typeorm";
import { BlogspotsRepository } from "../repository/BlogspotsRepository";
import { Blogspots } from "../model/Blogspots";

interface IDeleteBlogspot {
    slug: string;
}

class DeleteBlogspotService {

    async DeleteBlog({slug}: IDeleteBlogspot) {
        const blogspotRepository = getCustomRepository(BlogspotsRepository);

        /**
         * Também com o mesmo conceito do slug na busca do blog e pra alterar
         * Estendi esse conceito pra cá pra excluir, poderia ser qualquer outro parâmetro
         * Mas já que estavamos usando o slug...
         * 
         */

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