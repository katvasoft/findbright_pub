import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from 'typeorm';

@Entity()
export class Promotion {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    active : boolean;

    @Column()
    promotionName : string;

    @Column()
    limitWithKeywords : boolean;

    @Column()
    keyword : string;

    @Column()
    dateFrom : Date;

    @Column()
    dateTo : Date;

    @Column()
    title : string;

    @Column()
    content : string;

    @Column()
    link : string;

    @Column()
    thumbnailUrl : string;

    @Column()
    accountid : string;
}