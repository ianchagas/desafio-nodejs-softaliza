import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableBlogspots1626016627208 implements MigrationInterface {

    /**
     * A coluna created_at, não fazia muito sentido se fosse setada a pessoa que está "logada"
     * Penso que, se o cara que estiver usando no momento for só alguém que faz as postagem mas outra pessoa escreveu
     * Fez mais sentido utilizar então um varchar e setar um nome conforme nome do criador mesmo
     */
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "blogspots",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true,
                        isGenerated: true
                    },
                    {
                        name: "title",
                        type: "varchar"
                    },
                    {
                        name: "content",
                        type: "varchar"
                    },
                    {
                        name: "slug",
                        type: "varchar"
                    },
                    {
                        name: "created_by",
                        type: "varchar"
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
                    }
                ]
            }), true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("blogspots");
    }

}