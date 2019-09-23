import React from "react"
import CartContext from "../../contexts/CartContext";
import CartDropdown from "./CartDropdown";

const CartButton = () => {
  return(
    <CartContext.Consumer>
      {
        ({ cartProducts, addProduct }) => (
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
    </CartContext.Consumer>
  )
}

export default CartButton
