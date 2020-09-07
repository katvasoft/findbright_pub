import {getManager,getConnection} from 'typeorm';
import { uuid } from 'uuidv4';
import {UiLookAndFeel} from '../entities/UiLookAndFeel';



export const queryLookAndFeelWithAccountId = async (id: string) => {

    try {
        const styles = await getManager().getRepository(UiLookAndFeel)
        .createQueryBuilder("ui")
        .where("ui.accountid = :id", { id: id })
        .getMany();

        return styles;
    } catch(e) {
        return null;
    }
   
}

export const saveLookAndFeel = async (style : any) => {

    
        const styles = await queryLookAndFeelWithAccountId(style.accountid);
        if(styles) {
            styles.forEach(st => {removeStyle(st.id)})
        }

        if(!style.id) {
            style.id = uuid().toString();
        }

        const styleRepository = getManager().getRepository(UiLookAndFeel);
        styleRepository.save(style);

}

export const removeStyle = async (id : string) => {

    await getConnection()
            .createQueryBuilder()
            .delete()
            .from(UiLookAndFeel)
            .where("id = :id", {id: id})
            .execute();

}
