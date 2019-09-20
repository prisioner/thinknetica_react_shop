import React from "react"
import PropTypes from "prop-types"
import { Col, Dropdown, DropdownButton } from "react-bootstrap"
import { sum, values, map } from "lodash"
import PRODUCTS from "~/src/constants/Products"

export default class Cart extends React.PureComponent {
  static propTypes = {
    cartProducts: PropTypes.object.isRequired,
    onDragOver: PropTypes.func,
    onDrop: PropTypes.func,
  }

  disabled = () => this.count() === 0

  count = () => sum(values(this.props.cartProducts))

  title = () => this.count() > 0 ? `Корзина (${this.count()})` : "Корзина пуста"

  render () {
    const { onDragOver, onDrop } = this.props
    const items = map(this.props.cartProducts, (count, id) => {
      const { title } = PRODUCTS.find(item => item.id === parseInt(id))

      return <Dropdown.Item key={id}>{`${title} x ${count} шт.`}</Dropdown.Item>
    })

    return (
      <Col
        md={12}
        className="text-right border mh-100"
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
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
