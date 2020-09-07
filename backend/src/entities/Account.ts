import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from 'typeorm';


@Entity()
export class Account {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    accountName : string;

    @Column()
    dateCreated : string;

}