import React from "react"
import NotFoundPage from "./NotFoundPage"
import PRODUCTS from "../constants/Products"
import { Row, Col } from "react-bootstrap"
import ProductCard from "./ProductCard"

const ProductPage = ({ productId }) => {
  const product = PRODUCTS.find(item => item.id === parseInt(productId))

  if (!product) {
    return <NotFoundPage />
  }

  return(
    <Row>
      <Col>
        <ProductCard { ...product } />
      </Col>
    </Row>
  )
}

export default ProductPage
