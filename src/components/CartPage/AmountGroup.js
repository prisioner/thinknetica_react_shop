import React from "react"
import {Button, FormControl, InputGroup} from "react-bootstrap"

const AmountGroup = ({ productId, amount, addProduct }) => {
  return(
    <InputGroup>
      <InputGroup.Prepend>
        <Button
            onClick={() => addProduct(productId, -1)}
            disabled={amount === 1}
        >-</Button>
      </InputGroup.Prepend>
      <FormControl
          type="number"
          readOnly
          value={amount}
          style={{ maxWidth: "75px" }}
      />
      <InputGroup.Append>
        <Button onClick={() => addProduct(productId, 1)}>+</Button>
      </InputGroup.Append>
    </InputGroup>
  )
}

export default AmountGroup
