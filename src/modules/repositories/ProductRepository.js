import request from "superagent"
import { map } from "lodash"

const DEFAULT_SPACE_ID = "4vu7hyjtavus"
const DEFAULT_ENV_ID = "master"
const BASE_URL = "https://cdn.contentful.com"
const ACCESS_TOKEN = "K35yhT0GuuAZVc1vOwy3-WhPQTaEKHfjnOhDi6GuCOE"

const productsUrl = (spaceId = DEFAULT_SPACE_ID, env_id = DEFAULT_ENV_ID) => (
  `${BASE_URL}/spaces/${spaceId}/environments/${env_id}/entries`
)

const productByIdUrl = (productId, spaceId = DEFAULT_SPACE_ID, envId = DEFAULT_ENV_ID) => (
  `${productsUrl(spaceId, envId)}/${productId}`
)

export const getProducts = () => (
  request
    .get(productsUrl())
    .query({ "content_type": "product" })
    .set('Authorization', `Bearer ${ACCESS_TOKEN}`)
    .then(({ body: { items } }) => {
      const products = map(items, (item) => {
        const product = item.fields
        product.id = item.sys.id
        return product
      })

      return { products }
    })
)

export const getProductById = productId => (
  request
    .get(productByIdUrl(productId))
    .set('Authorization', `Bearer ${ACCESS_TOKEN}`)
    .then(({ body: { fields: product } }) => {
      product.id = productId

      return { product }
    })
    .catch(err => {
      if (err.response.statusCode === 404) {
        throw new Error({ notFound: true })
      }
      else {
        throw new Error(err)
      }
    })
)
