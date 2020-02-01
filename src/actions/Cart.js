import * as types from "../constants/actionTypes/Cart"

export const addProduct = (productId, amount = 1) => ({
  type: types.ADD_PRODUCT,
  productId,
  amount,
})

export const removeProduct = (productId) => ({
  type: types.REMOVE_PRODUCT,
  productId,
})
