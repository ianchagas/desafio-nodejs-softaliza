import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDefaultUsers1626015567863 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner
        .manager
        .createQueryBuilder()
        .insert()
        .into("users")
        .values([
            {
                id: "d1941c64-931e-4b24-b6cc-3f07ae7bc164",
                username: "Admin Default",
                useremail: "admin.default@softaliza.com.br",
                useradmin: true,
                password_hash: "$2y$08$PVSIEDLXavso9CF2pbFrNuwuPGkLT/ovbXbXwLUC16HL79ZkL13li"
            },
            {
                id: "3feed1a7-7683-46b5-98f8-a6f250dedd15",
                username: "User Default",
                useremail: "user.default@softaliza.com.br",
                useradmin: false,
                password_hash: "$2y$08$TL3U8tkM2Hq.zEqbp.033.d07gSbR8feQahmUtr92FRXQjWrMzNfO"
            }
        ])
        .execute()

        //id uuid aleatório
        //password hash Admin Default = 123456
        //password hash User Default = userdefault
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner
        .manager
        .createQueryBuilder()
        .delete()
        .from("users")
        .execute()
    }

}
