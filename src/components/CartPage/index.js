import React from "react"
import ProductList from "./ProductList"
import { Row, Col, Spinner } from "react-bootstrap"
import CartContext from "../../contexts/CartContext"
import { isEmpty } from "lodash"
import { Redirect } from "react-router"
import { mainPath } from "../../helpers/routes"
import { clone } from "lodash"
import request from "superagent"
import { ACCESS_TOKEN, productsPath } from "../../helpers/contentful_api"

export default class CartPage extends React.PureComponent {
  state = {
    loading: true,
    products: [],
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

        this.setState({ loading: false, products })
      })
  }

  render() {
    const { loading, products } = this.state

    if (loading) {
      return(
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }

    return(
      <Row>
        <Col>
          <h3>Cart</h3>
          <CartContext.Consumer>
            {
              ({ cartProducts, addProduct, removeProduct }) => (
                isEmpty(cartProducts)
                  ?
                  <Redirect to={{
                    pathname: mainPath(),
                    state: { message: "Cart is empty" }
                  }}
                  />
                  :
                  <ProductList
                    products={products}
                    productList={cartProducts}
                    addProduct={addProduct}
                    removeProduct={removeProduct}
                  />
              )
            }
          </CartContext.Consumer>
        </Col>
      </Row>
    )
  }
}
