import { Request, Response } from "express";
import { ListBlogspotsBySlugService } from "../service/ListBlogspostBySlugService";

class ListBlogspotBySlugController {
    async handle(req: Request, res: Response) {
        const {slug} = req.params;

        const listBlogspotsBySlugService = new ListBlogspotsBySlugService();

        const ListBlogBySlug = await listBlogspotsBySlugService.FindBlogBySlug(slug);

        return res.json(ListBlogBySlug);
    }
}

export { ListBlogspotBySlugController }