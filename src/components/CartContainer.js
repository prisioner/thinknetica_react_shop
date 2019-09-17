import React from "react"
import CartContext from "../contexts/CartContext"
import { Container } from "react-bootstrap"

export default class CartContainer extends React.PureComponent {
  constructor(props) {
    super(props)

    this.addProduct = (product, count) => {
      const { cartProducts } = this.state

      if (!cartProducts.hasOwnProperty(product)) cartProducts[product] = 0

      cartProducts[product] += parseInt(count)

      this.setState = {
        cartProducts,
      }
    }
  }

  state = {
    cartProducts: {},
  }

  render () {
    const { children } = this.props
    const context = this.state
    context.addProduct = this.addProduct

    return (
      <Container>
        <CartContext.Provider value={context}>
          {children}
        </CartContext.Provider>
      </Container>
    )
  }
}
