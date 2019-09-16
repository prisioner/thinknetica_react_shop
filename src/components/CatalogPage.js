import React from "react"
import ProductCard from "./ProductCard"

const CatalogPage = ({products}) => (
  <div>{products.map(product => (<ProductCard key={product.id} {...product} />))}</div>
)

export default CatalogPage