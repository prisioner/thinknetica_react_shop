import React from "react"
import ProductCard from "../ProductCard"
import { Col } from "react-bootstrap"

const Catalog = ({ products }) => (
  products.map(product => (<Col md={4} className="mb-3" key={product.id}><ProductCard { ...product } /></Col>))
)

export default Catalog
