import {heroes} from '../data/heroes';

export const getHerosByName = (name='')=>{

    name = name.toLocaleLowerCase().trim();

    if(name.length === 0) return [];

    const new_heroes = heroes.filter( (heroe)=>{
        return heroe.superhero.toLocaleLowerCase().includes(name);
    } );

    return new_heroes
}