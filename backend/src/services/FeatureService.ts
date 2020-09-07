import {getManager, getConnection} from 'typeorm';
import { Feature } from '../entities/Feature';
import { FeatureVote } from '../entities/FeatureVote';
import { uuid } from 'uuidv4';
import { queryUserWithId } from './UserService';

export const GetAllFeatures = async() => {

    const featureRepository = getManager().getRepository(Feature);

    const features = await featureRepository.find();

    return features;

}

export const GetFeatureVotesWithAccountId = async(accountid : string) => {

    

    const featureVotes = await getManager()
                                .getRepository(FeatureVote)
                                .createQueryBuilder("featurevote")
                                .where("featurevote.accountid = :id", { id: accountid })
                                .getMany();

    return featureVotes;

}

export const GetAccountFeaturesAndVotes = async(accountid : string) => {

    const features = await GetAllFeatures();

    const featureVotes = await GetFeatureVotesWithAccountId(accountid);

    const featureDtos = features.map( val => {
        CheckFeatureVotes(val,featureVotes);
    })

    return featureDtos;
}

export const VoteForFeature = async(dto : FeatureVote) => {

    if(!dto.id) {
        dto.id = uuid().toString();
    }

    const featureVoteRepository = getManager().getRepository(FeatureVote);

    await featureVoteRepository.save(dto);

}

export const VoteForFeatureWithUserId = async(featureid: string, userid : string) => {

    const user = await queryUserWithId(userid);

    const featureVote = {
        id : uuid().toString(),
        accountid : user.accountid,
        featureid : featureid
    };

    const featureVoteRepository = getManager().getRepository(FeatureVote);

    await featureVoteRepository.save(featureVote);

}

const CheckFeatureVotes = async(feature : Feature, featureVotes : FeatureVote[]) => {

    let feat = { id : feature.id, featureName : feature.featureName, featureDesc : feature.featureDesc, featureCreated : feature.featureCreated, featureVoted : false }

    featureVotes.forEach(element => {
        
        if(element.featureid === feature.id) {
            feat.featureVoted = true;
        }

    });

    return feat;

}

