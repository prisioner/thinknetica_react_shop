import React from "react"
import { productPath } from "../helpers/routes"
import ProductPage from "../components/ProductPage"

export default {
  path: productPath(),
  exact: true,
  strict: true,
  render: ({ match }) => {
    return (
      <ProductPage productId={match.params.id} />
    )
  }
}
