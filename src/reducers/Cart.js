import * as types from "../constants/actionTypes/Cart"
import { clone } from "lodash"

const initialState = {
  cartProducts: {},
};

export default function(state = initialState, action) {
  const cartProducts = clone(state.cartProducts)
  const { productId } = action

  switch (action.type) {
    case types.ADD_PRODUCT:
      const { amount } = action

      if (!cartProducts.hasOwnProperty(productId)) cartProducts[productId] = 0

      cartProducts[productId] += parseInt(amount)

      return {
        ...state,
        cartProducts,
      }
    case types.REMOVE_PRODUCT:
      delete cartProducts[productId]

      return {
        ...state,
        cartProducts,
      }
    case types.LOAD_CART_STATE:
      return {
        ...state,
        cartProducts: action.cartProducts,
      }
    default:
      return state
  }
}
