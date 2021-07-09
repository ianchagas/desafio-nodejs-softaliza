import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository";

// Esse middleware serve para garantir (ensure) que um usuário é um admin


export async function ensureAdmin(
    req: Request,
    res: Response,
    next: NextFunction
) {

    //Recupero meu usuário da requisição que eu acrescentei criando o index.d.ts no @types/express
    const { user_id } = req;

    //Agora vou verificar o repository do User novamente
    const verifyRepository = getCustomRepository(UserRepository);

    //Busco o user_id e salvo dentro de isAdmin
    const isAdmin = await verifyRepository.findOne(user_id);

    // O tipo padrão do isAdmin deve ser boolean, então eu seto que isAdmin é o mesmo que useradmin do repository
    const admin = isAdmin?.useradmin;

    // Se for true segue o fluxo da aplicação, indicando que é um admin que está acessando
    if(admin) {
        return next();
    }

    // Se não for barra o acesso aqui indicando que é um acesso não autorizado.
    return res.status(401).json({
        error: "Unauthorized"
    })
}