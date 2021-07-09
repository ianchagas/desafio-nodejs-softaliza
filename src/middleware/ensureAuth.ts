import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

//Esse middleware tem como objetivo sempre garantir (ensure) que o usuário possua um token criado

interface IPayLoad { //interface para setar a const sub como string (ela irá receber o uuid do user por desestruturação)
    sub: string;
}

export function ensureAuth (
    req: Request,
    res: Response,
    next: NextFunction
) {

    //Variável eespera receber uma request com um token, por isso o authorization
    const AuthToken = req.headers.authorization;

    //Se não receber, provavelmente o token já está expirado ou inexistente na requisição
    if(!AuthToken) {
        return res.status(401).json({message: "Token is missing"});
    }

    /**
     * 
     * O token por padrão ao utilizar o JWT vem basicamente "Bearer + Token"
     * Como eu quero somente o token, não quero a forma de authorization dele, eu quebrei o token em 2
     * O comando split do JavaScript serve pra poder fazer uma separação de uma string e transformar em um array
     * Ao utilizar o split com um espaço eu separei Bearer do Token e para salvar isso eu criei uma const
     * Essa const recebe um array em que o primeiro termo é ignorado com a vírgula e salvando o segundo termo (ou seja, o token)
     * Na variável criada
     * 
     */
    const [,Token] = AuthToken.split(" ");


    /**
     * Essa parte referente ao try catch é uma das mais complicadinhas de explicar como foi feita
     * Aplicando o verify do JWT ele espera dois parâmetros. O Token gerado e também a secret key para ele verificar se está tudo ok
     * A variável sub que está passando por desestruturação e que possui um payload, na realidade ela recebe 4 parametros no retorno
     * Primeiro o email, depois iat e exp que seriam referente ao tempo de validação do Token e o sub, que é a ID do usuário (que eu queria mesmo recuperar)
     * 
     * Desestruro ela para recuperar somente o que me interessa nesse ponto, que é o id do usuário
     * 
     * Para salvar esse novo user_id dentro da request, eu criei uma pasta @types que serve para acrescentar alguns parâmetros padrão
     * Para esse caso, como vamos recuperar esse id do usuário por requisição reescrevi o "index.d.ts" do Express
     * Feito isso, nas minhas requests agora tenho acesso ao user_id para usar em outras validações, por isso eu queria recuperar o id do usuário
     * 
     * Por fim se tudo der certo, next significa que ele pode seguir em frente com o fluxo da aplicação
     */
    try{
        const {sub} = verify(Token, "e6e70883ba3da86d7c3f8d83b3aa0d37") as IPayLoad;
        req.user_id = sub;
        return next();
    }catch(err) {
        return res.status(401).end();
    }
}