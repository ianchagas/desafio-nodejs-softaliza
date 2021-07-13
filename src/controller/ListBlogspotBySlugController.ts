import { Request, Response } from "express";
import { ListBlogspotsBySlugService } from "../service/ListBlogspostBySlugService";

class ListBlogspotBySlugController {
    async handle(req: Request, res: Response) {
        const {slug} = req.params; // tipo de request, vai receber o slug para listar SÓ pelo slug

        const listBlogspotsBySlugService = new ListBlogspotsBySlugService();

        const ListBlogBySlug = await listBlogspotsBySlugService.FindBlogBySlug(slug);

        return res.json(ListBlogBySlug);

        // Retorna um JSON somente com o blog buscado
    }
}

export { ListBlogspotBySlugController }