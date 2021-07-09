import { Request, Response } from "express";
import { AuthUserService } from "../service/AuthUserService";

// Conforme dito no controller do Usuário, controller vai ser responsável por controlar nossa aplicação no que diz respeito a fluxos

class AuthUserController {
    async handle(req: Request, res: Response) {
        // Espera receber o email e a senha através de request body para criar o token
        const {useremail, password_hash} = req.body;

        // Salvo um new auth do service na variável Auth para que ele permita ter acesso ao service
        const AuthUser = new AuthUserService();

        // Variável token recebe uma verificação do usuário que é a function que vai pegar o email e a senha para criar o token
        const Token = await AuthUser.verifyUser({
            useremail,
            password_hash
        });

        // Se ele passar por toda a regra criada, retorna o token em um JSON
        return res.json(Token);
    }
}

export { AuthUserController }