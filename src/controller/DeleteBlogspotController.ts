import { Request, Response } from "express";
import { DeleteBlogspotService } from "../service/DeleteBlogspotService";

class DeleteBlogspotController {
    async handle(req: Request, res: Response) {
        const { slug }  = req.params;
        const deleteBlogspotService = new DeleteBlogspotService();

        const DeleteBlogspot = await deleteBlogspotService.DeleteBlog({
            slug
        })

        return res.json(DeleteBlogspot);
    }
}

export { DeleteBlogspotController }