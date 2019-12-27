import React from "react"
import CartContext from "../contexts/CartContext"
import { Container } from "react-bootstrap"
import { connect } from "react-redux"
import * as cartActions from "../actions/Cart"
import { bindActionCreators } from "redux"

const mapStateToProps = (state) => ({
  cartProducts: state.cart.cartProducts,
})

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: bindActionCreators(cartActions.addProduct, dispatch),
    removeProduct: bindActionCreators(cartActions.removeProduct, dispatch),
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class CartContainer extends React.PureComponent {
  render () {
    const { children, cartProducts, addProduct, removeProduct } = this.props

    return (
      <Container>
        <CartContext.Provider value={{cartProducts, addProduct, removeProduct}}>
          {children}
        </CartContext.Provider>
      </Container>
    )
  }
}
