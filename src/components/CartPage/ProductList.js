import React from "react"
import { Table } from "react-bootstrap"
import ProductListItem from "./ProductListItem"
import ProductListTotal from "./ProductListTotal"
import { map } from "lodash"

const ProductList = ({ products, productList, addProduct, removeProduct }) => {
  const productListItems = map(productList, (amount, productId) => {
    const product = products.find(item => item.id === productId)

    return (<ProductListItem
              key={productId}
              product={product}
              amount={amount}
              addProduct={addProduct}
              removeProduct={removeProduct}
            />)
  })

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
        {productListItems}
        <ProductListTotal products={products} productList={productList} />
      </tbody>
    </Table>
  )
}

export default ProductList
