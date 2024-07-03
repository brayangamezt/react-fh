// Un THUNK es una funcion que ejecuta una tarea asincrona y que cuando termina, ejecuta una de las funciones de los reducer
import { startLoadingPokemon, setPokemon } from './pokemonSlice';
import { pokemonApi } from '../../../api/pokemonApi';


export const getPokemons = (page = 0) =>{

    return async(dispatch, getState)=>{

        //Ejecutando la funcion del loading en startLoading
        dispatch( startLoadingPokemon() );

        //TODO: Realizar peticion HTTP
        const { data } = await pokemonApi.get(`pokemon?limit=10&offset=${page * 10   }`)

        //Ejecitar siguiente accion del reducer
        dispatch( setPokemon({pokemons:data.results, page:page + 1}) );

    }
    
}

//Para usar esta funcion es necesario mandarla llamar en el componente que queremos utilizarlo