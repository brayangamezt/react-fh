import React, { useMemo } from 'react'
import { getHeroByPublisher } from '../helpers/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroesList = ({publisher}) => {

    const heroes = useMemo( ()=> getHeroByPublisher(publisher), [publisher]  )

  return (
    <>
      <div className="row rows-cols-1 row-cols-md-3 g-3">
          {/*Al destructura el Hero dentro del MAP, estamos mandando todos los valores como propiedades al hero card*/}
        {
            heroes.map( (hero)=>{
                return(
                    <HeroCard key={hero.id} {...hero} />
                )
            } )
        }
      </div>
    </>
  )
}
