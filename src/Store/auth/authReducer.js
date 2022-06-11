import { LOGIN, LOGOUT } from "./authTypes"

let initialState = {
    isAuth : false
}

export const authReducer = (state = initialState, {type}) => {

    switch(type) {
        case LOGIN : {
            return {...state, isAuth : true}
        }
        case LOGOUT : {
            return {...state, isAuth : false}
        }
        default : {
            return state;
        }
    }
}