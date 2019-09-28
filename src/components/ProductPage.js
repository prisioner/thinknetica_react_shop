import React from "react"
import NotFoundPage from "./NotFoundPage"
import { Row, Col, Spinner } from "react-bootstrap"
import ProductCard from "./ProductCard"
import request from "superagent"
import { productPath, ACCESS_TOKEN } from "../helpers/contentful_api"
import PropTypes from "prop-types"
import { clone } from "lodash"

export default class ProductPage extends React.PureComponent {
  static propTypes = {
    productId: PropTypes.string.isRequired,
  }

  state = {
    notFound: false,
    loading: true,
    product: {},
  }

  componentDidMount() {
    const productId = this.props.productId
    request
      .get(productPath(productId))
      .set('Authorization', `Bearer ${ACCESS_TOKEN}`)
      .then(({body: { fields }}) => {
        const product = clone(fields);

        product.id = productId;

        this.setState( { loading: false, product });
      })
      .catch(err => (
        err.response.statusCode === 404 ? this.setState({ loading: false, notFound: true }) : console.log(err)
      ))
  }

  render() {
    const { product, loading, notFound } = this.state

    if (loading) {
      return(
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }

    if (notFound) {
      return <NotFoundPage />
    }

    return(
      <Row>
        <Col>
          <ProductCard { ...product } />
        </Col>
      </Row>
    )
  }
}
