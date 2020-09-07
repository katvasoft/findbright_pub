import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from 'typeorm';

@Entity()
export class Synonym {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    synonymList : string;

    @Column()
    accountid : string;
}