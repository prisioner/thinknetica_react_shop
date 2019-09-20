import React from "react"
import ProductCard from "./ProductCard"
import { Col } from "react-bootstrap"

const Catalog = ({ products }) => (
  products.map(product => (<Col key={product.id}><ProductCard {...product} /></Col>))
)

export default Catalog
