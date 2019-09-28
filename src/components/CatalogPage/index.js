import React from "react"
import PRODUCTS from "~/src/constants/Products"
import Catalog from "./Catalog"
import { Row } from "react-bootstrap"

export default class CatalogPage extends React.PureComponent {
  render () {
    return (
      <Row className="mt-3">
        <Catalog products={PRODUCTS} />
      </Row>
    )
  }
}
