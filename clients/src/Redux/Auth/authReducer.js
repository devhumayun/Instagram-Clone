import { REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS } from "./actionType";
import { authInitial } from "./authInitial";


// create auth reducer
export const authReducer = ( state = authInitial, { payload, type } ) => {
    switch (type) {
        case REGISTER_REQUEST:
            return {
               ...state,
               loading : true,
               message : null
            }
        
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading : false,
                message : payload
            }

        case REGISTER_FAILED:
            return {
                ...state,
                loading : false,
                message : payload
            }
    
        default:
            return state;
    }
}