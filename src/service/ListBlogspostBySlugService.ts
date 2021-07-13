import { getCustomRepository, Repository } from "typeorm";
import { BlogspotsRepository } from "../repository/BlogspotsRepository";
import { Blogspots } from "../model/Blogspots";

interface IFindSlug {
    slug: string;
}

class ListBlogspotsBySlugService {
    private listBlospotsRepository: Repository<Blogspots>;

    /**
     * utilizado um constructor só pra fins de demonstrar conhecimento mesmo
     * com o construtor e pegando o repositório através do metódo privado, libera o findOne diretamente
     * pelo acesso da variável, não tem necessidade de desestruturar variáveis etc
     */

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