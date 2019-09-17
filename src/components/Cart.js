import React from "react"
import PropTypes from "prop-types"
import { Col, Dropdown, DropdownButton } from "react-bootstrap"
import _ from "lodash"

export default class Cart extends React.PureComponent {
  static propTypes = {
    cartProducts: PropTypes.object.isRequired,
    productList: PropTypes.array.isRequired,
  }

  disabled = () => _.isEmpty(this.props.cartProducts)

  title = () => {
    const products = this.props.cartProducts
    const prefix = "Корзина"
    const suffix = _.isEmpty(products) ? "пуста" : `(${_.sum(_.values(products))})`

    return `${prefix} ${suffix}`
  }

  render () {
    const items = _.map(this.props.cartProducts, (count, id) => {
      const { title } = this.props.productList.find(item => item.id === parseInt(id))

      return <Dropdown.Item key={id}>{`${title} x ${count} шт.`}</Dropdown.Item>
    })

    return (
      <Col md={{ span: 2, offset: 10 }} className="text-right">
        <DropdownButton
          alignRight
          title={this.title()}
          disabled={this.disabled()}
        >
          {items}
        </DropdownButton>
      </Col>
    )
  }
}
