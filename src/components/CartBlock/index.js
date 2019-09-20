import React from "react"
import CartContext from "../../contexts/CartContext";
import Cart from "./Cart";

export default class CartBlock extends React.PureComponent {
  render() {
    return(
      <CartContext.Consumer>
        {
          ({ cartProducts, addProduct }) => (
            <Cart
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
}
