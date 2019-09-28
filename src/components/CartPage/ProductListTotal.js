import React from "react"
import { Button } from "react-bootstrap"
import PRODUCTS from "../../constants/Products"
import { reduce } from "lodash"

const ProductListTotal = ({ productList }) => {
  const totalPrice = reduce(productList, (total, amount, productId) => {
    const product = PRODUCTS.find(item => item.id === parseInt(productId))

    return total + amount * parseFloat(product.price)
  }, 0)

  return(
    <tr>
      <td><strong>Total</strong></td>
      <td colSpan={2}></td>
      <td>₽{totalPrice.toFixed(2)}</td>
      <td>
        <Button variant="success" disabled>Order now</Button>
      </td>
    </tr>
  )
}

export default ProductListTotal
