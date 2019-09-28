import React from "react"
import ProductList from "./ProductList"
import { Row, Col } from "react-bootstrap"
import CartContext from "../../contexts/CartContext"
import { isEmpty } from "lodash"
import { Redirect } from "react-router"
import { mainPath } from "../../helpers/routes"

const CartPage = () => {
  return(
    <Row>
      <Col>
        <h3>Cart</h3>
        <CartContext.Consumer>
          {
            ({ cartProducts, addProduct, removeProduct }) => (
              isEmpty(cartProducts)
                ?
                  <Redirect to={{
                    pathname: mainPath(),
                    state: { message: "Cart is empty" }
                  }}
                  />
                  :
                  <ProductList
                    productList={cartProducts}
                    addProduct={addProduct}
                    removeProduct={removeProduct}
                  />
            )
          }
        </CartContext.Consumer>
      </Col>
    </Row>
  )
}

export default CartPage
