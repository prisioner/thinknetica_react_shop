import React from "react"
import NotFoundPage from "./NotFoundPage"
import { Row, Col, Spinner } from "react-bootstrap"
import ProductCard from "./ProductCard"
import PropTypes from "prop-types"
import { getProductById } from "../modules/repositories/ProductRepository"

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

    getProductById(productId)
      .then(({ product }) => {
        this.setState({ loading: false, product })
      })
      .catch(err => (
        err.notFound ? this.setState({ loading: false, notFound: true }) : console.log(err)
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
