import React from "react"
import CartContext from "../contexts/CartContext"
import { Container } from "react-bootstrap"
import _ from "lodash"

export default class CartContainer extends React.PureComponent {
  addProduct = (product, count = 1) => {
    const cartProducts = _.clone(this.state.cartProducts)

    if (!cartProducts.hasOwnProperty(product)) cartProducts[product] = 0

    cartProducts[product] += parseInt(count)

    this.setState({ ...this.state, cartProducts })
  }

  state = {
    cartProducts: {},
    addProduct: this.addProduct,
  }

  render () {
    const { children } = this.props

    return (
      <Container>
        <CartContext.Provider value={this.state}>
          {children}
        </CartContext.Provider>
      </Container>
    )
  }
}
