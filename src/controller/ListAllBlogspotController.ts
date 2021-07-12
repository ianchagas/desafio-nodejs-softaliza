import { Request, Response } from "express";
import { ListAllBlogspotServices } from "../service/ListAllBlogspotService";


class ListAllBlogspostController {
    async handle(req: Request, res: Response) {
        const listBlogspostService = new ListAllBlogspotServices();

        const ListBlogs = await listBlogspostService.ListAll();

        return res.json(ListBlogs);
    }
}

export { ListAllBlogspostController}