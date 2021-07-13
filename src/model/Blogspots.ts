import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


/**
 * Nada mudou para o Model de Users, só que tem uma PrimaryGeneratedColumn
 * Ela é responsável por criar uma PK auto_increment not null
 */

@Entity("blogspots")
class Blogspots {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    created_by: string;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    slug: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export { Blogspots }