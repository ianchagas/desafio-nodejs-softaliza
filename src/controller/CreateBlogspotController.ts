import { Request, Response } from "express";
import { CreateBlogspotService } from "../service/CreateBlogspotService";

class CreateBlogspotController {
    async handle(req: Request, res: Response) {
        const { title, content, slug, created_by} = req.body;
        const createBlogspotService = new CreateBlogspotService();

        const blog = await createBlogspotService.CreateBlog({title, content, slug, created_by});

        return res.json(blog);
    }
}

export { CreateBlogspotController }