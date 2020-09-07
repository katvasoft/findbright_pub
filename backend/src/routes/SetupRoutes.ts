import {Router} from 'express';
import {queryAccountDomains,saveDomain,updateDomain,
        updateDomainLastCrawl,removeDomain, queryAccountSynonyms,
        removeSynonym,saveSynonym,queryAccountPromotions,
        savePromotion, updatePromotion,removePromotion, updateSynonym} from '../services/SetupService';
import {queryLookAndFeelWithAccountId, saveLookAndFeel, removeStyle} from '../services/LookAndFeelService';
import {routeErrorWrapper} from '../services/CommonErrorHandler';
import { checkJwt } from '../services/JwtService';

const router = Router();
const domainPath = "/domain";
const synonymPath = "/synonym";
const promotionPath = "/promotion";
const stylePath = "/style";

router.use(domainPath,checkJwt);
router.use(synonymPath,checkJwt);
router.use(promotionPath,checkJwt);
router.use(stylePath, checkJwt);

router.route(domainPath+"/account/:accountid")
        .get(routeErrorWrapper(async (req,res) => {
            if(req.params['accountid']) {
                const domains = await queryAccountDomains(req.params['accountid']);
                res.send(domains);
            } else {
                res.status(400).send();
            }
        }))

router.route(synonymPath+"/account/:accountid")
        .get(routeErrorWrapper(async (req,res) => {
            if(req.params['accountid']) {
                const synonyms = await queryAccountSynonyms(req.params['accountid']);
                res.send(synonyms);
            } else {
                res.status(400).send();
            }
        }))

router.route(synonymPath+"/:id")
        .delete(routeErrorWrapper(async (req,res) => {
            const id = req.params['id'];
            
            await removeSynonym(id);

            res.status(200).send();
        }))

router.route(domainPath+"/:id") 
        .delete(routeErrorWrapper(async (req,res) => {
            const id = req.params['id'];

            await removeDomain(id);

            res.status(200).send();
        }))

router.route(domainPath)
        .post(routeErrorWrapper(async (req,res) => {

            const domains = req.body;

            await saveDomain(domains);

            res.status(201).send();

        }))

router.route(domainPath)
        .put(routeErrorWrapper(async (req,res) => {

            const domains = req.body;

            await updateDomain(domains);

            res.status(200).send();
        }))

router.route(synonymPath)
        .post(routeErrorWrapper(async (req,res) => {

            const synonym = req.body;

            await saveSynonym(synonym);

            res.status(201).send();

        }))

router.route(synonymPath)
        .put(routeErrorWrapper(async (req,res) => {

            const synonym = req.body;

            await updateSynonym(synonym);

            res.status(200).send();

        }))

router.route(promotionPath)
        .post(routeErrorWrapper(async (req,res) => {

            const promotion = req.body;

            await savePromotion(promotion);

            res.status(201).send();

        }));

router.route(promotionPath)
        .put(routeErrorWrapper(async (req,res) => {

            const promotion = req.body;

            await updatePromotion(promotion);

            res.status(200).send();

        }))

router.route(promotionPath+"/account/:id").get(routeErrorWrapper( async(req,res) => {
        const id = req.params['id'];

        const promotions = await queryAccountPromotions(id);

        res.send(promotions);

    }
) )

router.route(promotionPath+"/:id").delete( routeErrorWrapper(async (req,res) => {

    const id = req.params['id'];

    await removePromotion(id);

    res.status(200).send();

}))

router.route(stylePath+"/account/:id").get(routeErrorWrapper(async (req,res) => {

    const id = req.params['id'];

    const styles = await queryLookAndFeelWithAccountId(id);

    res.send(styles);

}));

router.route(stylePath).post(routeErrorWrapper(async (req,res) => {

    const style = req.body;

    await saveLookAndFeel(style);

    res.status(201).send();

}))

router.route(stylePath+"/:id").delete(routeErrorWrapper(async (req,res) => {

    const id = req.params['id'];

    await removeStyle(id);

    res.status(200).send();

}))

export const SetupController : Router = router;