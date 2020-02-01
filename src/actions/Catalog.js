import * as types from "../constants/actionTypes/Catalog"
import { getProducts } from "../modules/repositories/ProductRepository"

const requestProducts = () => ({
  type: types.FETCH_PRODUCTS_REQUEST,
})

const receiveProducts = (products) => {
  return {
    type: types.FETCH_PRODUCTS_SUCCESS,
    products: products.reduce((prev, next) => ({ ...prev, [next.id]: next }), {}),
  }
}

const errorProducts = () => ({
  type: types.FETCH_PRODUCTS_ERROR,
})

export function fetchCatalog() {
  return (dispatch) => {
    dispatch(requestProducts())

    return getProducts()
      .then(({ products }) => {
        dispatch(receiveProducts(products))
      })
      .catch(error => {
        dispatch(errorProducts())
      })
  }
}
