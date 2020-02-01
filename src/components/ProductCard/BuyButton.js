import React from "react"
import { InputGroup, FormControl, Button } from "react-bootstrap"
import { connect } from "react-redux"
import * as cartActions from "../../actions/Cart"
import { bindActionCreators } from "redux"

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: bindActionCreators(cartActions.addProduct, dispatch),
  }
}

@connect(null, mapDispatchToProps)
export default class BuyButton extends React.PureComponent {
  state = {
    count: 1,
  }

  handleChange = event => {
    const { value } = event.target

    if (value > 0) this.setState({ count: value })
  }

  render () {
    const { productId, addProduct } = this.props
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
          <Button variant="success" onClick={() => addProduct(productId, count)}>Add to Cart</Button>
        </InputGroup.Append>
      </InputGroup>
    )
  }
}
