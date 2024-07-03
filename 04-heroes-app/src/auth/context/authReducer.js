import {types} from '../types/types';

export const authReducer = (state = {}, action) =>{

    switch (action.type) {
        case types.login:
            return { logged:true, user:action.payload, ...state }

        case types.logout:
            return {logged:false, name:null, ...state}
    
        default:
            break;
    }
}