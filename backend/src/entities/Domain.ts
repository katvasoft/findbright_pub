import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from 'typeorm';

@Entity()
export class Domain {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    domainName : string;

    @Column({nullable : true})
    lastCrawl : string;

    @Column()
    accountid : string;

}