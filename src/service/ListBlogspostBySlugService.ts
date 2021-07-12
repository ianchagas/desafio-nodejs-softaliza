import { getCustomRepository, Repository } from "typeorm";
import { BlogspotsRepository } from "../repository/BlogspotsRepository";
import { Blogspots } from "../model/Blogspots";

interface IFindSlug {
    slug: string;
}

class ListBlogspotsBySlugService {
    private listBlospotsRepository: Repository<Blogspots>;

    constructor() {
        this.listBlospotsRepository = getCustomRepository(BlogspotsRepository);
    }

    async FindBlogBySlug(slug:string) {
        const findSlug = await this.listBlospotsRepository.findOne({
            slug
        })

        return findSlug;
    }
}

export { ListBlogspotsBySlugService }