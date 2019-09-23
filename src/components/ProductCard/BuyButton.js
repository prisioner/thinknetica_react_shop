import React from "react"
import { InputGroup, FormControl, Button } from "react-bootstrap"
import CartContext from "../../contexts/CartContext"

export default class BuyButton extends React.PureComponent {
  state = {
    count: 1,
  }

  handleChange = event => {
    const { value } = event.target

    if (value > 0) this.setState({ count: value })
  }

  render () {
    const { productId } = this.props
    const { count } = this.state

    return (
      <InputGroup>
        <FormControl
          type="number"
          value={count}
          onChange={this.handleChange}
        />
        <InputGroup.Append>
          <InputGroup.Text>шт.</InputGroup.Text>
          <CartContext.Consumer>
            {
              ({ addProduct }) => (
                <Button variant="success" onClick={() => addProduct(productId, count)}>Add to Cart</Button>
              )
            }
          </CartContext.Consumer>
        </InputGroup.Append>
      </InputGroup>
    )
  }
}
