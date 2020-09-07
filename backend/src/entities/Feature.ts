import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from 'typeorm';

@Entity()
export class Feature {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    featureName : string;

    @Column()
    featureDesc : string;

    @Column()
    featureCreated : Date;

}