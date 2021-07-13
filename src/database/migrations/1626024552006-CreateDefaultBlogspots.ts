import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDefaultBlogspots1626024552006 implements MigrationInterface {

    /**
     * 
     * Optei por criar essa migration de blogsposts default, para demonstrar um pouco meu conhecimento em SQL puro
     * 
     */

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner
        .query(`with catchAdmin as (
                    select
                        userid
                    from
                        users
                    where
                        username = 'Admin Default'
            )
        insert into "blogspots" (id, title, content, slug, created_by, created_at, updated_at)
        values
        (default,
        'Publicação de Teste 1',
        'Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.',
        'publicacao-de-teste1',
        (select * from catchAdmin),
        'now',
        'now'
        )`);

        await queryRunner
        .query(`with catchAdmin as (
                    select
                        userid
                    from
                        users
                    where
                        username = 'Admin Default'
            )
        insert into "blogspots" (id, title, content, slug, created_by, created_at, updated_at)
        values
        (default,
        'Publicação de Teste 2',
        'Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.',
        'publicacao-de-teste2',
        (select * from catchAdmin),
        'now',
        'now'
        )`);

        await queryRunner
        .query(`with catchAdmin as (
                    select
                        userid
                    from
                        users
                    where
                        username = 'Admin Default'
            )
        insert into "blogspots" (id, title, content, slug, created_by, created_at, updated_at)
        values
        (default,
        'Publicação de Teste 3',
        'Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.',
        'publicacao-de-teste3',
        (select * from catchAdmin),
        'now',
        'now'
        )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner
        .manager
        .createQueryBuilder()
        .delete()
        .from("blogspots")
        .execute()
    }

}
