import React from "react"
import { Button } from "react-bootstrap"
import { reduce } from "lodash"

const ProductListTotal = ({ productList, products }) => {
  const totalPrice = reduce(productList, (total, amount, productId) => {
    const product = products.find(item => item.id === productId)

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
