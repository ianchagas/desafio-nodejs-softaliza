import { Request, Response } from "express";
import { CreateBlogspotService } from "../service/CreateBlogspotService";

class CreateBlogspotController {
    async handle(req: Request, res: Response) {
        const { title, content, slug, created_by} = req.body; // seta o tipo de request
        const createBlogspotService = new CreateBlogspotService();

        const blog = await createBlogspotService.CreateBlog({title, content, slug, created_by}); 
        // informações "necessárias" para criar novo blog, no caso slug como estamos pegando por desestruturação, deixa ele aí...

        return res.json(blog);
    }
}

export { CreateBlogspotController }