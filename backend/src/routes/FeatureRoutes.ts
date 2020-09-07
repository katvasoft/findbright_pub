import {Router} from 'express';
import { GetAccountFeaturesAndVotes, GetFeatureVotesWithAccountId  } from '../services/FeatureService';
import {routeErrorWrapper} from '../services/CommonErrorHandler';
import { checkJwt } from '../services/JwtService';

const router = Router();

const path = "/feature";

router.use(path,checkJwt);

router.route(path+"/:accountid")
        .get(routeErrorWrapper(async (req,res) => {
            if(req.params['accountid']) {
                const features = GetFeatureVotesWithAccountId(req.params['accountid']);
                res.send(features);
            }
        }))

router.route(path+"/vote/:featureid")
            .post(routeErrorWrapper(async (req,res) => {
                if(req.params['featureid']) {
                    //TODO: Get user id from request and then create feature vote and save it
                }
            }))


export const FeatureController : Router = router;