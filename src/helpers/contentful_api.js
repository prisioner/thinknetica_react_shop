const DEFAULT_SPACE_ID = "4vu7hyjtavus"
const DEFAULT_ENV_ID = "master"
const basePath = "https://cdn.contentful.com"

export const ACCESS_TOKEN = "K35yhT0GuuAZVc1vOwy3-WhPQTaEKHfjnOhDi6GuCOE"
export const productsPath = (spaceId = DEFAULT_SPACE_ID, env_id = DEFAULT_ENV_ID) => (
  `${basePath}/spaces/${spaceId}/environments/${env_id}/entries`
)
export const productPath = (productId, spaceId = DEFAULT_SPACE_ID, envId = DEFAULT_ENV_ID) => (
  `${productsPath(spaceId, envId)}/${productId}`
)
