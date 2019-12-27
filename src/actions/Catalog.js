import * as types from "../constants/actionTypes/Catalog"
import request from "superagent"
import { clone, map } from "lodash"

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

    const baseUrl = "https://cdn.contentful.com"
    const spaceId = "4vu7hyjtavus"
    const environmentId = "master"
    const contentType = "product"
    const accessToken = "K35yhT0GuuAZVc1vOwy3-WhPQTaEKHfjnOhDi6GuCOE"
    const productsUrl = `${baseUrl}/spaces/${spaceId}/environments/${environmentId}/entries`

    return request
      .get(productsUrl)
      .query({ 'content_type': contentType })
      .set('Authorization', `Bearer ${accessToken}`)
      .then(({ body: { items } }) => {
        const products = map(items, (item) => {
          const product = clone(item.fields)
          product.id = item.sys.id
          return product
        })

        dispatch(receiveProducts(products))
      })
      .catch(error => {
        dispatch(errorProducts())
      })
  }
}
