import { Request, Response } from "express";
import { ListAllBlogspotService } from "../service/ListAllBlogspotService";


class ListAllBlogspostController {
    async handle(req: Request, res: Response) {
        const listBlogspostService = new ListAllBlogspotService();

        const ListBlogs = await listBlogspostService.ListAll();

        return res.json(ListBlogs);
    }
}

export { ListAllBlogspostController}