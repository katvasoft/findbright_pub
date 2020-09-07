import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from 'typeorm';

@Entity()
export class FeatureVote {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    accountid : string;

    @Column()
    featureid : string;
 

}