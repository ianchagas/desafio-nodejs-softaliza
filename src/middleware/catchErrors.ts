import { Request, Response, NextFunction } from "express";

export function catchErrors(
    err: Error,
    req: Request, // precisa exportar request para funcionar no arquivo de rotas
    res: Response,
    next: NextFunction
) {
    // Se receber qualquer tipo de erro do tipo Error padrão, ele informa um status 400 contendo a mensagem de erro desenvolvida.

        if(err instanceof Error) {
            return res.status(400).json({
                error: err.message
            })
        }
    
    // Irá retornar um status 500 caso sejam erros que não sejam gerados pela API e sim por servidor ou algo nesse sentido.
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error"
        })
}