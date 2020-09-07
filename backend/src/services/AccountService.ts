import {getManager} from 'typeorm';
import { Account } from '../entities/Account';
import { Feedback } from '../entities/Feedback';
import moment from 'moment';
import { uuid } from 'uuidv4';

export const queryAccountWithId = async (id : string) => {

    const account = await getManager().getRepository(Account)
                            .createQueryBuilder("account")
                            .where("account.id = :id", { id: id })
                            .getOne();

    return account;
}

export const queryAllAccounts = async () => {

    const accountRepository = getManager().getRepository(Account);

    const accounts = await accountRepository.find();

    return accounts;

}

export const saveAccount = async (account : Account) => {

    if(!account.id) {
        account.id = uuid().toString();
    }

    if(!account.dateCreated) {
        account.dateCreated = moment().format()
    }

    const accountRepository = getManager().getRepository(Account);

    
    const createdAccount =  await accountRepository.save(account);

    return createdAccount;

}

export const saveAccountFeedback = async ( feedback : Feedback) => {

    if(feedback.accountid) {
        
        if(!feedback.feedbackCreated) {
            feedback.feedbackCreated = moment().format()
        }

    const feedBackRepository = getManager().getRepository(Feedback);
    feedBackRepository.save(feedback);

    } else {
        throw 'AccountId cannot be empty';
    }

}