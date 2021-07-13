import { Request, Response } from "express";
import { DeleteBlogspotService } from "../service/DeleteBlogspotService";

class DeleteBlogspotController {
    async handle(req: Request, res: Response) {
        const { slug }  = req.params; // seta tipo de request (esse é aquele via parâmetro na URL)
        const deleteBlogspotService = new DeleteBlogspotService();

        
        const DeleteBlogspot = await deleteBlogspotService.DeleteBlog({
            // acessa o método que leva até um createQueryBuilder que vai excluir o blog
            // através do acesso por parâmetro do slug
            slug
        })

        return res.json(DeleteBlogspot);
    }
}

export { DeleteBlogspotController }