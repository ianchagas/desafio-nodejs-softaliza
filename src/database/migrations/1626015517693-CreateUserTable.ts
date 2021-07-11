import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class users1625635304027 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        /**
         * A opção de utilizar uuid como type para o id do user é um gosto pessoal
         * Acho que utilizar uuid para criação do id faz mais sentido ao usar JWT (Autenticação escolhida)
         * Como a ideia é criar um middleware que faça a validação da autenticação para as rotas que necessitarem
         * A recuperação do id do usuário fica mais segura (a nível de produção) se for um uuid e não um id incremental
         * 
         */

        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        isUnique: true,
                        generationStrategy: 'uuid',
                        default: `uuid_generate_v4()`
                    },
                    {
                        name: "username",
                        type: "varchar"
                    },
                    {
                        name: "useremail",
                        type: "varchar"
                    },
                    {
                        name: "useradmin",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "password_hash",
                        type: "varchar",
                    }
                ]
            }), true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
