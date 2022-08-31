import {ADD_TO_CART, SIGN_UP} from "./types.js";

const initialState = {
    goods: [],
    password: null,
    login: null,
}

export const catalogReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART: 
            return {...state, goods: [...state.goods, action.payload]}
        case SIGN_UP:
            return {...state, login: action.login, password: action.password}
        default: return state
    }
}