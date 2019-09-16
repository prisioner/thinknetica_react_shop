import React from "react"
import PRODUCTS from "~/src/constants/Products"
import CatalogPage from "./CatalogPage"
import { Container, Row } from "react-bootstrap"

export default class Catalog extends React.PureComponent {
  render () {
    return (
      <Container>
        <Row>
          <CatalogPage products={PRODUCTS} />
        </Row>
      </Container>
    )
  }
}
