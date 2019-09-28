import React from "react"
import Catalog from "./Catalog"
import { Row } from "react-bootstrap"
import { ACCESS_TOKEN, productsPath } from "../../helpers/contentful_api"
import request from "superagent"
import { clone } from "lodash"

export default class CatalogPage extends React.PureComponent {
  state = {
    products: []
  }

  componentDidMount() {
    request
      .get(productsPath())
      .query({ "content_type": "product" })
      .set('Authorization', `Bearer ${ACCESS_TOKEN}`)
      .then(({ body: { items } }) => {
        const products = [];
        items.map((item) =>{
          const product = clone(item.fields);
          product.id = item.sys.id;
          products.push(product);
        })

        this.setState({ products })
      })
  }

  render () {
    const { products } = this.state

    return (
      <Row className="mt-3">
        <Catalog products={products} />
      </Row>
    )
  }
}
