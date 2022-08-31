import { ADD_TO_CART, SIGN_UP } from "./types.js";

export function addToCart(good) {
  return {
    type: ADD_TO_CART,
    payload: good,
  };
}
export function signUp(login, password) {
  return {
    type: SIGN_UP,
    login: login,
    password: password,
  };
}
