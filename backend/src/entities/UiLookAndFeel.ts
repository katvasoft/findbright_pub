import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class UiLookAndFeel {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    accountid : string;

    @Column()
    searchBarStyle : string;

    @Column()
    searchResultStyle : string;

}