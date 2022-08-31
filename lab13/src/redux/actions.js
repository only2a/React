import { ADD_TO_CART, DELETE_FROM_CART, DELIVERY_METHOD, PAYMENT_METHOD, ADDRESS } from "./types.js";

export function addToCart(good) {
  return {
    type: ADD_TO_CART,
    payload: good,
  };
}
export function deleteFromCart(good) {
  return {
    type: DELETE_FROM_CART,
    payload: good,
  }
}
export function deliveryMethod(method) {
  return {
    type: DELIVERY_METHOD,
    payload: method,
  }
}
export function paymentMethod(method) {
  return {
    type: PAYMENT_METHOD,
    payload: method,
  }
}
export function address(address) {
  return {
    type: ADDRESS,
    payload: address
  }
}