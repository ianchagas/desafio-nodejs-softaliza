import { getCustomRepository } from "typeorm"; //CustomRepository é para ter as funções nativas do typeorm e utiliza-las em conjunto com o repositório novo criado
import { UserRepository } from "../repository/UserRepository"; // importanto repositório para ter acesso as promisses
import { hash } from "bcryptjs"; // importando bcrypt para criar o hash do password

// A camada de services é criada com intuito de apresentar uma camada de regras para a aplicação.
// Nela irá conter as regras separadas por responsabilidade de cada função (criar tem uma regra, buscar tem outra regra, etc)
// Em estudos e projetos que vi, é aconselhável criar um service para cada função especifica
// No caso de uso desse projeto, utilizei em um arquivo só com nomes de funções async claras para facilitar a leitura do codebase


// Criando interface para setar o tipo primitivo de cada atributo

interface IUserRequest {
    username: string;
    useremail: string;
    useradmin?: boolean; // ponto de interrogação aponta atributo opcional
    password_hash: string;

}

class UserService {

    async createUser({username, useremail, useradmin = false, password_hash} : IUserRequest) { // useradmin default sempre vai ser false
        // variável verifyRepository recebe dados do UserRepository através do Custom
        const verifyRepository = getCustomRepository(UserRepository); 

        // Primeira verificação: se não passar e-mail para criar o novo usuário, não tem como criar
        if(!useremail) { 
            throw new Error("Email incorrect");
        }

        // Verifica se usuário existe através de e-mail
        const UserAlreadyExists = await verifyRepository.findOne({ 
            useremail
        });

        // Se e-mail já existir, informa que o usuário já existe
        if(UserAlreadyExists) {
            throw new Error("User already exists");
        }

        // Critografando o password através da função "hash" orinda do bcrypt
        const passwordHash = await hash(password_hash, 8);

        // Se passou pela validação de antes, vamos criar o usuário
        const user = verifyRepository.create({
            username,
            useremail,
            useradmin,
            password_hash: passwordHash
        });

        // Se criou o usuário, salvamos ele na base de dados
        await verifyRepository.save(user);

        // Salvando corretamente, retorna o usuário.
        return user;
    }

}


export { UserService }