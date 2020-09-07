import {getManager, getConnection} from 'typeorm';

import { Domain } from '../entities/Domain';
import { Synonym } from '../entities/Synonym';
import { Promotion } from '../entities/Promotion';
import { uuid } from 'uuidv4';
import moment from 'moment';

export const queryAccountDomains = async (id : string) => {

    const domains = await getManager().getRepository(Domain)
                    .createQueryBuilder("domain")
                    .where("domain.accountid = :id", { id : id })
                    .getMany();

    return domains;                

}

export const queryAccountSynonyms = async (id : string) => {

    const synonyms = await getManager().getRepository(Synonym)
                        .createQueryBuilder("synonym")
                        .where("synonym.accountid = :id", {id : id})
                        .getMany();

    return synonyms;

}

export const queryAccountPromotions = async (id : string) => {

    const promotions = await getManager().getRepository(Promotion)
                                .createQueryBuilder("promotion")
                                .where("promotion.accountid = :id", {id : id})
                                .getMany();

    return promotions;

}

export const saveSynonym = async (synonym : Synonym) => {

    if(synonym.accountid) {

        if(!synonym.id) {
            synonym.id = uuid().toString();
        }

        const synonymRepository = getManager().getRepository(Synonym);
        synonymRepository.save(synonym);
    }

}

export const saveDomain = async ( domain : Domain ) => {

    if(domain.accountid) {

        if(!domain.id) {
            domain.id = uuid().toString();
        }

        const domainRepository = getManager().getRepository(Domain);

        domainRepository.save(domain);
        
    } else {
        throw 'AccountId cannot be empty';
    }

}

export const savePromotion = async ( promotion : Promotion) => {

    if(promotion.accountid) {

        if(!promotion.id) {
            promotion.id = uuid().toString();
        }
        
        const promotionRepository = getManager().getRepository(Promotion);

        promotionRepository.save(promotion);

    } else {
        throw 'AccountId cannot be empty';
    }


}

export const updatePromotion = async ( promotion : Promotion) => {

    await getConnection()
            .createQueryBuilder()
            .update(Promotion)
            .set({ active: promotion.active, promotionName : promotion.promotionName,
                limitWithKeywords : promotion.limitWithKeywords, keyword : promotion.keyword,
                dateFrom: promotion.dateFrom, dateTo : promotion.dateTo, title: promotion.title,
                content : promotion.content, link: promotion.link,thumbnailUrl: promotion.thumbnailUrl })
            .where("id = :id", { id: promotion.id })
            .execute();

}

export const updateDomain = async ( domain : Domain) => {

    await getConnection()
            .createQueryBuilder()
            .update(Domain)
            .set({ domainName : domain.domainName, lastCrawl: domain.lastCrawl })
            .where("id = :id ", { id : domain.id })
            .execute();

}

export const updateSynonym = async (synonym : Synonym) => {

    await getConnection()
            .createQueryBuilder()
            .update(Synonym)
            .set({synonymList : synonym.synonymList})
            .where("id = :id", { id: synonym.id })
            .execute();

}

export const updateDomainLastCrawl = async ( id : string) => {

    await getConnection()
            .createQueryBuilder()
            .update(Domain)
            .set({ lastCrawl : moment().format() })
            .where("id = :id", { id : id })
            .execute();

}

export const removeDomain = async (id : string) => {

    await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Domain)
            .where("id = :id", {id: id})
            .execute();
}

export const removeSynonym = async (id : string) => {

    await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Synonym)
            .where("id = :id", {id : id})
            .execute();

}

export const removePromotion = async (id : string) => {

    await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Promotion)
            .where("id = :id", {id : id})
            .execute();

}

