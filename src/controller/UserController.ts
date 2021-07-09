import { Request, Response } from "express";
import { UserService } from "../service/UserService";

// O controller vai ser responsável por controlar nossa aplicação no que diz respeito a fluxos
// É ele que vai ser responsável por gerenciar aquilo que é repassado no endpoint para as regras e depois para o banco de dados

class UserController {
    async handle(req: Request, res: Response) {
        // o req.body é o que a requisição espera no corpo dela (através de um json)
        // nesse caso, os dados para criação do usuário
        const { username, useremail, useradmin, password_hash} = req.body;

        // Variável recebe o services para criar um novo "service de usuário"
        const CreateUsers = new UserService();

        // Variável user, vai receber uma promise contendo a função especifica de criação de usuário que contém a regra para criação
        const user = await CreateUsers.createUser({username, useremail, useradmin, password_hash});

        // Dando tudo certo nas regras e criando o usuário, retorna um json com os dados do usuário criado
        return res.json(user);
    }
}

export { UserController }