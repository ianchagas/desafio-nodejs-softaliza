import { Request, Response } from "express";
import { UpdateBlogspotService } from "../service/UpdateBlogspotService";

class UpdateBlogspotController {
    async handle(req: Request, res: Response) {
        const { slug }  = req.params;
        const { title, content, created_by } = req.body;
        /**
         * recebe dois tipos de request
         * vai buscar pelo slug (buscar por parâmetro)
         * se achar o slug ele atualiza com as informações do body
         */

        const updateBlogspotService = new UpdateBlogspotService();

        const UpdateBlogspot = await updateBlogspotService.UpdateBlog({
            slug,
            title,
            content,
            created_by
        })

        return res.json(UpdateBlogspot);

        // Retorna um JSON base apontando 0 ou 1 para o commit final
        // 0 não fez a atualização
        // 1 fez a atualização e deu certo
        
    }
}

export { UpdateBlogspotController }