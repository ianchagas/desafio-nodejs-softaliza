import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { UserRepository } from "../repository/UserRepository";
import { sign } from "jsonwebtoken";

// Aqui iremos começar a criação da implementação do token jwt conforme parametros escolhidos para validação do usuário

// Criação de interface para setar os tipos das variáveis principais que vamos usar para validar
interface IAuthRequest {
    useremail: string;
    password_hash: string;
}

class AuthUserService {
    async verifyUser({useremail, password_hash}: IAuthRequest) {
        // variável UsersRepository recebe dados do UserRepository através do Custom
        // Objetivo é de fato buscar os usuários do repository para começar a criar o token
        const UsersRepository = getCustomRepository(UserRepository);

        // Busca usuário existente através do e-mail
        const UserExists = await UsersRepository.findOne({ 
            useremail
        });

        // Se usuário não existir (não encontrar nenhum e-mail), retorna erro
        if(!UserExists) {   
            throw new Error("Email or Password incorrect, try again");
        }

        // MatchPassword vai servir para comparar a senha que o usuário passar já criptografando, com a senha que existe no cadastro
        const MatchPassword = await compare(password_hash, UserExists.password_hash);

        // Se a senha não for igual retorna erro
        if(!MatchPassword) {        
            throw new Error ("Email or Password incorrect, try again");
        }


        /**
         * 
         * Para a criação do token utilizamos a função "sign" da lib jwt
         * Ela espera 4 parâmetros principais, sendo eles:
         * 1 - Um payload, que é um dado unico do usuário (no caso utilizando e-mail)
         * 2 - Uma secrect key, que gerei uma frase aleatória de teste em um hash MD5
         * 3 - O terceiro é uma infinidade de parâmetros, eu escolhi subject para informar o ID e poder recuperar ele depois
         * 4 - O quarto parâmetro é o tempo de expiração do token, escolhi 1 dia sendo possível alterar para testar, caso necessário
         * 
         */

        const CreateNewToken = sign({ 
            useremail: UserExists.useremail
        }, "e6e70883ba3da86d7c3f8d83b3aa0d37", {
            subject: UserExists.id,
            expiresIn: "1d"
        });

        // Se deu tudo certo, ele criará um novo token com base nesses parâmetros
        // Retorna o token criado
        return CreateNewToken;
    }

}


export { AuthUserService }