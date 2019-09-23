import React from "react"
import PRODUCTS from "../../constants/Products"
import { Image, Button } from "react-bootstrap"
import AmountGroup from "./AmountGroup"
import ConfirmationModal from "./ConfirmationModal"


export default class ProductListItem extends React.PureComponent {
  state = {
    showModal: false,
  }

  handleShow = () => this.setState({ showModal: true })
  handleClose = () => this.setState({ showModal: false })

  render() {
    const { productId, amount, addProduct, removeProduct } = this.props
    const product = PRODUCTS.find(item => item.id === parseInt(productId))
    const { title, price, imageUrl } = product
    const subTotal = parseFloat(price) * amount
    const { showModal } = this.state

    return(
      <tr>
        <td>
          <Image src={imageUrl} width="30px" height="30px" alt={`[${title}]`} />
          {title}
        </td>
        <td>₽{price}</td>
        <td>
          <AmountGroup productId={productId} amount={amount} addProduct={addProduct} />
        </td>
        <td>₽{subTotal.toFixed(2)}</td>
        <td>
          <Button variant="danger" onClick={this.handleShow}>Remove</Button>

          <ConfirmationModal show={showModal} onClose={this.handleClose} onConfirm={() => removeProduct(productId)} />
        </td>
      </tr>
    )
  }
}
