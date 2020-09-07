import {Router} from 'express';
import {queryUsersWithAccountId,saveLocalUser,updateUser,removeUser, 
  changePassword, queryUserWithUsername, signUp} from '../services/UserService';
import { login } from '../services/AuthenticationService';
import {routeErrorWrapper} from '../services/CommonErrorHandler';
import { checkJwt } from '../services/JwtService';

const router = Router();

const path = "/user";
const loginPath = "/login";
const signUpPath = "/signUp";

router.use(path,checkJwt);

router.route(path+"/account/:accountid")
      .get(routeErrorWrapper(async (req,res) => {
        if (req.params['accountid']) {

            const account = await queryUsersWithAccountId(req.params['accountid']);
            
            if(account) {
                res.send(account);
            } else {
                res.status(404).send();
            }
            
        } else {
            res.status(400).send();
        }
      }))

router.route(loginPath)
      .post(routeErrorWrapper(async (req,res) => {

        try {
          const usrLogin = req.body;

          const response = await login(usrLogin.username,usrLogin.pword);

          const user = await queryUserWithUsername(usrLogin.username);
  
          const respObj = { 'token' : response, 'accountid' : user.accountid }
  
          res.send(respObj);
        } catch(e) {
          res.status(400).send();
        }
       

      }))

  router.route(signUpPath)
        .post(routeErrorWrapper(async (req,res) => {

          try {

            const signUpDto = req.body;

            const result = await signUp(signUpDto);

            if(result) {
              res.status(200).send();
            } else {
              res.status(500).send();
            }

          } catch (e) {
            res.status(400).send();
          }

        }))

router.route(path)
      .post(routeErrorWrapper((async (req,res) => {
          
        const user = req.body;

        await saveLocalUser(user);

        res.status(201).send();

      })))

router.route(path+"/changepass")
      .post(routeErrorWrapper((async (req,res) => {

        const passwordChange = req.body;

        await changePassword(passwordChange);

        res.status(200).send();

      })))

router.route(path)
      .put(routeErrorWrapper((async (req,res) => {

        const user = req.body;

        await updateUser(user);

        res.status(200).send();

      } )))

 router.route(path+"/:id")
       .delete(routeErrorWrapper(async (req,res) => {
        
        const id = req.params['id'];
        await removeUser(id);
        res.status(200).send();

       }))

export const UserController : Router = router;