import {MochaGlobals} from "mocha";
import {expect} from "chai";
import { User } from "../model/User";
import "reflect-metadata";
import { createConnection } from "typeorm";

class HelloWorld {

}

describe("Test Hello World", () => {
    it("test_init_doNothing", () => {
        let sut = new HelloWorld()
    })
})

describe("Users", function() {
    before(async function(){
        await createConnection({
            "type": "postgres",
            "host": "localhost",
            "port": 5432,
            "username": "postgres",
            "password": "123456",
            "database": "desafiosoftaliza",
            "entities": ["src/model/*.ts"]
        });
    });

    it('should be able to add a user', async function() {
        let user = new User();
        user.username = "User Teste";
        user.useremail = "teste@teste.com.br";
        user.useradmin = false;
        user.password_hash = "123456";
    })

})

/**
 * A camada de testes não prossegui com ela
 * Sinceramente eu não sei direito como fazer, tentei até onde deu, mas eu vi que por integração de stack/tecnologias
 * NestJS + TypeORM + GraphQL parece fazer muito sentido
 * 
 * Fica de aprendizado e como proposta para mim mesmo de estudar mais isso, e melhorar nesse aspecto
 */