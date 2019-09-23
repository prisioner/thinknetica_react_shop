import React from "react"
import PropTypes from "prop-types"
import { Dropdown, Button, ButtonGroup } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { cartPath } from "../../helpers/routes"
import { sum, values, map } from "lodash"
import PRODUCTS from "~/src/constants/Products"

export default class CartDropdown extends React.PureComponent {
  static propTypes = {
    cartProducts: PropTypes.object.isRequired,
    onDragOver: PropTypes.func,
    onDrop: PropTypes.func,
  }

  disabled = () => this.count() === 0

  count = () => sum(values(this.props.cartProducts))

  title = () => this.count() > 0 ? `Cart (${this.count()})` : "Cart is empty"

  render () {
    const { onDragOver, onDrop } = this.props
    const items = map(this.props.cartProducts, (count, id) => {
      const { title } = PRODUCTS.find(item => item.id === parseInt(id))

      return <Dropdown.Item key={id}>{`${title} x ${count} шт.`}</Dropdown.Item>
    })

    return (
      <Dropdown
        as={ButtonGroup}
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        <Button as={NavLink} to={cartPath()}>{this.title()}</Button>

        <Dropdown.Toggle split disabled={this.disabled()} />

        <Dropdown.Menu alignRight>
          { items }
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}
