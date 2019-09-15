import React from "react"
import ProductCard from "./ProductCard"

export default class CatalogPage extends React.PureComponent {
  render () {
    const productCards = this.props.products.map(product => (
      <ProductCard
        text={product.title}
        price={product.price}
        src={product.imageUrl}
      />
    ))

    return (
      <div>
        {productCards}
      </div>
    )
  }
}
