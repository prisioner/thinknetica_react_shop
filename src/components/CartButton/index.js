import React from "react"
import CartDropdown from "./CartDropdown"
import { connect } from "react-redux"
import * as cartActions from "../../actions/Cart"
import { bindActionCreators } from "redux"

const mapStateToProps = (state) => ({
  cartProducts: state.cart.cartProducts,
})

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: bindActionCreators(cartActions.addProduct, dispatch),
  }
}

const CartButton = ({ cartProducts, addProduct }) => {
  return(
    <CartDropdown
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

export default connect(mapStateToProps, mapDispatchToProps)(CartButton)
