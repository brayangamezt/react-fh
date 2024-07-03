import { useReducer } from "react"
import { AuthContext } from "./AuthContext"

import {authReducer} from '../context/authReducer';

import { types } from "../types/types";

const initialState= {
  logged:false
}

export const AuthProvider = ({children}) => {

  const [ authState, dispatch ] = useReducer(authReducer, initialState);

  const login = ( name = '' ) => {

    const action = {
      type:types.login,
      payload: {
        id:'ABC',
        name:name
      }
    }

    dispatch(action);

  }

  const saludo = 'hola mundo';

  return (
    <AuthContext.Provider value={{hi:saludo, authState}} >
        {children}
    </AuthContext.Provider>
  )
}
