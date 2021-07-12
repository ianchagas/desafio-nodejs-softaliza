import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableBlogspots1626016627208 implements MigrationInterface {

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
                        type: "uuid"
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