import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid} from "uuid"; // A version foi utilizada como v4 pois já tinha visto exemplos de funcionamento com essa version
                                  // Pra um contexto geral (dessa projeto) não fazia muita diferença qual version usar



// Essa camada é sugerida pelo TypeORM como Entities ou Entidades. Eu sempre conheci por Model pelo padrão MVC e mantive assim.
// Também tem uma diferença bacana que é os decorators que basicamente vai setar o tipo especifico de cada campo
// O campo de entidade recebe um @Entity por exemplo, as colunas @Column e assim por diante

// Nesse ponto, para tudo funcionar bem, dentro do tsconfig.json que é criado ao importar a lib do typescript precisa de algumas modificações
// 1 - habilitar (descomentar) "experimentalDecorators" e "emitDecoratorMetadata" e ambos devem estar true
// 2 - habilitar (descomentar) "strictPropertyInitialization" e setar ele como false
// Isso faz com que, eu possa usar os decorators do TypeORM e também desabilita a camada de erros para inicialização de atributos oriundos desses Models criados

// Obs: retirar os erros não significa que a app não vai mais dar erro, significa que eu posso usar um atributo daqui como Property dentro de outro local
// Caso esse local esteja recebendo uma function em Promise

@Entity("users")
class User {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    username: string;

    @Column()
    useremail: string;

    @Column()
    useradmin: boolean;

    @Column()
    password_hash: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    // Esse construtor serve pra basicamente setar um uuid para cada id gerado de forma dinâmica
    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { User }