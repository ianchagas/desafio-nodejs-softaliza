import { Request, Response } from "express";
import { UpdateBlogspotService } from "../service/UpdateBlogspotService";

class UpdateBlogspotController {
    async handle(req: Request, res: Response) {
        const { slug }  = req.params;
        const { title, content, created_by } = req.body;

        const updateBlogspotService = new UpdateBlogspotService();

        const UpdateBlogspot = await updateBlogspotService.UpdateBlog({
            slug,
            title,
            content,
            created_by
        })

        return res.json(UpdateBlogspot);
    }
}

export { UpdateBlogspotController }