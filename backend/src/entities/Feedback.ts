import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from 'typeorm';


@Entity()
export class Feedback {

    @PrimaryGeneratedColumn("uuid")
    id : string;

    @Column({nullable : true})
    feedbackType : string;

    @Column()
    feedback : string;

    @Column()
    accountid : string;

    @Column()
    feedbackCreated : String;

    @Column({nullable : true})
    feedbackReplied : Date;

}