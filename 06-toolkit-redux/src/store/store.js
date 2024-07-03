import { configureStore } from '@reduxjs/toolkit';

//Importando los reducers (acciones a ejecutar) del contador
import { counterSlice } from './slices/counter';
import { pokemonSlice } from './slices/pokemon';


export const store = configureStore({
  reducer: {
    counter:counterSlice.reducer,
    pokemons:pokemonSlice.reducer
  },
})