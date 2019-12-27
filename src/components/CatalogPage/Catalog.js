import React from "react"
import ProductCard from "../ProductCard"
import { Col, Row } from "react-bootstrap"
import { map } from "lodash"

const Catalog = ({ products }) => (
  <Row className="mt-3">
    {map(products, product => (<Col md={4} className="mb-3" key={product.id}><ProductCard { ...product } /></Col>))}
  </Row>
)

export default Catalog
