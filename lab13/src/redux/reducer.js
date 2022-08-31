import { ADD_TO_CART, DELETE_FROM_CART, DELIVERY_METHOD, PAYMENT_METHOD, ADDRESS } from "./types.js";

const initialState = {
  goods: [],
  deliveryMethod: "",
  paymentMethod: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, goods: [...state.goods, action.payload] };
    case DELETE_FROM_CART:
      for (let i = 0; i < state.goods.length; i++) {
        if (action.payload === state.goods[i])
          return {
            ...state,
            goods: [...state.goods.slice(0, i), ...state.goods.slice(i + 1)],
            
          };
      }
    case DELIVERY_METHOD:
      return {...state, deliveryMethod: action.payload}
    case PAYMENT_METHOD:  
      return {...state, paymentMethod: action.payload}
      case ADDRESS:
        return {...state, address: action.payload}
    default:
      return state;
  }
};
