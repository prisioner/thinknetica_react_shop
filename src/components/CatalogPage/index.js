import React, { Fragment } from "react"
import PRODUCTS from "~/src/constants/Products"
import Catalog from "./Catalog"
import CartBlock from "../CartBlock"
import { Row } from "react-bootstrap"

export default class CatalogPage extends React.PureComponent {
  render () {
    return (
      <Fragment>
        <Row className="mt-5" style={{ minHeight: "100px" }}>
          <CartBlock />
        </Row>
        <Row className="mt-3">
          <Catalog products={PRODUCTS} />
        </Row>
      </Fragment>
    )
  }
}
