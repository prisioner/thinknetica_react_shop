import React from "react"
import CartContext from "../contexts/CartContext"
import { Container } from "react-bootstrap"
import { clone } from "lodash"

export default class CartContainer extends React.PureComponent {
  addProduct = (product, count = 1) => {
    const cartProducts = clone(this.state.cartProducts)

    if (!cartProducts.hasOwnProperty(product)) cartProducts[product] = 0

    cartProducts[product] += parseInt(count)

    this.setState({ cartProducts })
  }

  removeProduct = (product) => {
    const cartProducts = clone(this.state.cartProducts)

    delete cartProducts[product]

    this.setState({ cartProducts })
  }

  state = {
    cartProducts: {},
    addProduct: this.addProduct,
    removeProduct: this.removeProduct,
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
