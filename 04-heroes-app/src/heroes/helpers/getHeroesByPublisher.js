import {heroes} from '../data/heroes';

export const getHeroByPublisher = ( publisher ) =>{
    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if( !validPublisher.includes(publisher)){
        throw new Error(`El publisher ${publisher} no existe`);
    }

    const result = heroes.filter( (hero)=>{
        return hero.publisher === publisher
    } )
    return result
}