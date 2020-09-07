import {Router} from 'express';
import { queryAccountWithId, queryAllAccounts, saveAccount, saveAccountFeedback } from '../services/AccountService';
import { checkJwt } from '../services/JwtService';
import {routeErrorWrapper} from '../services/CommonErrorHandler';

const router = Router();

const path = "/account";
router.use(path,checkJwt);

router.route(path)
    .get(routeErrorWrapper(async (req,res) => {
       
        const accounts = await queryAllAccounts();

        res.send(accounts);
    }));

router.route(path)
    .post(routeErrorWrapper(async (req,res) => {

        const account = req.body;

        await saveAccount(account);

        res.status(201).send()

    }));

router.route(path+"/feedback")
        .post(routeErrorWrapper(async (req,res) => {

            const feedback = req.body;

            await saveAccountFeedback(feedback);

            res.status(201).send()
        }))

router.route(path)
    .put(routeErrorWrapper(async (req,res) => {

        const accountUpd = req.body;

        let account = await queryAccountWithId(accountUpd.id);

        account.accountName = accountUpd.accountName;

        account.dateCreated = accountUpd.dateCreated;

        await saveAccount(account);

        res.status(200).send();

    }));

router.route(path+"/:id")
    .get(routeErrorWrapper(async (req,res) => {

        if (req.params['id']) {

            const account = await queryAccountWithId(req.params['id']);
            
            if(account) {
                res.send(account);
            } else {
                res.status(404).send();
            }
            
        } else {
            res.status(400).send();
        }

    }));


export const AccountController : Router = router;