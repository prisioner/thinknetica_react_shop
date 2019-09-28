import React from "react"
import { Table } from "react-bootstrap"
import ProductListItem from "./ProductListItem"
import ProductListTotal from "./ProductListTotal"
import { map } from "lodash"

const ProductList = ({ productList, addProduct, removeProduct }) => {
  return(
    <Table>
      <thead>
        <tr>
          <th>Product name</th>
          <th>Price</th>
          <th>Amount</th>
          <th>Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          map(productList, (amount, productId) => (
            <ProductListItem
              key={productId}
              productId={productId}
              amount={amount}
              addProduct={addProduct}
              removeProduct={removeProduct}
            />
          ))
        }
        <ProductListTotal productList={productList} />
      </tbody>
    </Table>
  )
}

export default ProductList
