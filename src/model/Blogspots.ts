import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";

@Entity("blogspots")
class Blogspots {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    created_by: string;
    @JoinColumn({name: "userid"})
    @ManyToOne(() => User)
    user_create_blogspot: User

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