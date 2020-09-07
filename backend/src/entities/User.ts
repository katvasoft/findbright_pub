import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from 'typeorm';
import * as bcrypt from "bcryptjs";

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    username : string;

    @Column({ nullable : true })
    email : string;

    @Column({nullable : true})
    pword : string;

    @Column()
    provider : string;

    @Column()
    created : string;

    @Column()
    lastlogin : string;

    @Column()
    accountid : string;

    hashPassword() {
        this.pword = bcrypt.hashSync(this.pword, 8);
        
    }
    
    createNewPasswordHashAndSetIt(newPword : string) {
        this.pword = bcrypt.hashSync(newPword,8);
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.pword);
    }

}