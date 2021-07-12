import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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