import React from "react"
import Image from "./Image"
import Price from "./Price"
import TextBox from "./TextBox"
import BuyButton from "./BuyButton"
import { Card } from "react-bootstrap"

const ProductCard = ({ id, title, imageUrl, price }) => (
  <Card className="text-center">
    <Card.Header><TextBox>{title}</TextBox></Card.Header>
    <Card.Body>
      <p><Image src={imageUrl} width={120} height={120} alt={`[${title}]`} /></p>
      <Price price={price} />
    </Card.Body>
    <Card.Footer>
      <BuyButton productId={id} />
    </Card.Footer>
  </Card>
)

export default ProductCard
