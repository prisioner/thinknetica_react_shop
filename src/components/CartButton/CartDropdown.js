import React from "react"
import PropTypes from "prop-types"
import { Dropdown, Button, ButtonGroup } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { cartPath } from "../../helpers/routes"
import { sum, values, map } from "lodash"
import { getProducts } from "../../modules/repositories/ProductRepository"

export default class CartDropdown extends React.PureComponent {
  static propTypes = {
    cartProducts: PropTypes.object.isRequired,
    onDragOver: PropTypes.func,
    onDrop: PropTypes.func,
  }

  state = {
    products: [],
  }

  componentDidMount() {
    getProducts()
      .then(({ products }) => {
        this.setState({ products })
      })
  }

  disabled = () => this.count() === 0

  count = () => sum(values(this.props.cartProducts))

  title = () => this.count() > 0 ? `Cart (${this.count()})` : "Cart is empty"

  render () {
    const { onDragOver, onDrop } = this.props
    const items = map(this.props.cartProducts, (count, id) => {
      const { title } = this.state.products.find(item => item.id === id)

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
