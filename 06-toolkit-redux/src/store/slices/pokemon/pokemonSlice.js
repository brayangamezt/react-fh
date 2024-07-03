import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page:0,
        pokemons:[],
        isLoading:false
    },
    reducers: {
        startLoadingPokemon: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setPokemon: (state, action)=>{
            state.isLoading = false;
            state.page = action.payload.page
            state.pokemons = action.payload.pokemons;
        },
        setPage: (state)=>{
            state.page += 1;
        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingPokemon, setPokemon, setPage } = pokemonSlice.actions;