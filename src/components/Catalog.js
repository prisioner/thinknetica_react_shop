import React from "react"
import PRODUCTS from "~/src/constants/Products"
import CatalogPage from "./CatalogPage"
import CartContainer from "./CartContainer"
import Cart from "./Cart"
import { Row } from "react-bootstrap"
import CartContext from "../contexts/CartContext"

export default class Catalog extends React.PureComponent {
  render () {
    return (
      <CartContainer>
        <Row className="mt-5" style={{ minHeight: "100px" }}>
          <CartContext.Consumer>
            {
              ({ cartProducts, addProduct }) => (
                <Cart
                  productList={PRODUCTS}
                  cartProducts={cartProducts}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault()
                    const productId = e.dataTransfer.getData("text/plain")
                    addProduct(productId)
                  }}
                />
              )
            }
          </CartContext.Consumer>
        </Row>
        <Row className="mt-3">
          <CatalogPage products={PRODUCTS} />
        </Row>
      </CartContainer>
    )
  }
}
