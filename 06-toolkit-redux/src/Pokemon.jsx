import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from "./store/slices/pokemon";

export const Pokemon = () => {
    const dispatch = useDispatch();
    const {isLoading, pokemons, page} = useSelector( state=> state.pokemons )

    useEffect(() => {

        dispatch( getPokemons() );

    }, []);


    

  return (
    <>
      <h1> pokemon apis </h1>
      <hr />
      {
        isLoading 
        ?
        <p> Cargando pokemons </p>
        : 
        <ul>
            {
                pokemons.map( (pokemon, index)=>(
                    <li key={index} > {pokemon.name} </li>
                ) )
            }
        </ul>
      }
      <button disabled={isLoading}    onClick={ ()=> dispatch( getPokemons( page ) ) } > Next </button>
    </>
  )
}
