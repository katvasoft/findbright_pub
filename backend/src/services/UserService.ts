import {getManager, getConnection} from 'typeorm';
import { uuid } from 'uuidv4';
import { User } from '../entities/User';
import { SignUpDto } from '../dtos/SignUpDto';
import { PasswordChange } from '../dtos/PasswordChange';
import moment from 'moment';
import * as bcrypt from "bcryptjs";
import { saveAccount } from './AccountService';
import { Account } from '../entities';

export const queryUsersWithAccountId = async (id: string) => {

    const users = await getManager().getRepository(User)
                    .createQueryBuilder("user")
                    .where("user.accountid = :id", { id: id })
                    .getMany();

    return users;

}

export const queryUserWithId = async (id : string) => {

    const user = await getManager().getRepository(User)
                        .createQueryBuilder("user")
                        .where("user.id = :id", {id : id})
                        .getOne();

    return user;

}

export const  hashPassword = (pword) =>   {
    const hashedPword = bcrypt.hashSync(pword, 8);
    return hashedPword;    
}

export const queryUserWithUsername = async (username : string) => {

    const user = await getManager().getRepository(User)
                        .createQueryBuilder("user")
                        .where("user.username = :username", {username : username})
                        .getOne();

    return user;

}


export const setEntityAccountIdByUserId = async(userid: string, entity : any) => {

    const usr = await queryUserWithId(userid);

    entity.accountid = usr.accountid;

    return entity;

}

export const saveLocalUser = async (user : User) => {
    if(user.accountid) {

        if(!user.id) {
            user.id = uuid().toString();
        }

        if(!user.created) {
            user.created = moment().format()
        }

        if(!user.lastlogin) {
            user.lastlogin = moment().format()
        }
        user.pword = hashPassword(user.pword);
        user.provider = 'local';

        const userRepository = getManager().getRepository(User);

        return await userRepository.save(user);


    } else {
        throw 'AccountId cannot be empty';
    }
}

export const changePassword = async(passwordChange : PasswordChange) => {

    const user = await queryUserWithId(passwordChange.userid);

    const userOldPassword = hashPassword(user.pword);

    const givenOldPassword = hashPassword(passwordChange.oldPassword);

    if(userOldPassword === givenOldPassword) {

        await getConnection()
            .createQueryBuilder()
            .update(User)
            .set( {  pword : passwordChange.newPassword} )
            .where("id = :id" ,{ id : user.id})
            .execute();

    } else {
        throw 'Passwords do not match';
    }

}

export const signUp = async (signUpDto : SignUpDto) => {

    const account = new Account()

    account.accountName = signUpDto.accountName;

    const createdAccount = await saveAccount(account);

    const newUser = new User();

    newUser.accountid = createdAccount.id;

    newUser.email = signUpDto.email;

    newUser.username = signUpDto.username;

    newUser.pword = signUpDto.pword;

    const savedNewUser = await saveLocalUser(newUser);
    
    return savedNewUser;
}

export const updateUser = async (user : User) => {

    await getConnection()
            .createQueryBuilder()
            .update(User)
            .set( { username : user.username, pword : user.pword, provider : user.provider, email : user.email } )
            .where("id = :id" ,{ id : user.id})
            .execute();

}

export const removeUser = async (id : string) => {

    await getConnection()
            .createQueryBuilder()
            .delete()
            .from(User)
            .where("id = :id", {id: id})
            .execute();

}