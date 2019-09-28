import React from "react"
import PropTypes from "prop-types"
import { Dropdown, Button, ButtonGroup } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { cartPath } from "../../helpers/routes"
import { sum, values, map, clone } from "lodash"
import request from "superagent"
import { ACCESS_TOKEN, productsPath } from "../../helpers/contentful_api"

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
