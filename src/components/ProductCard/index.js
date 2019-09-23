import React from "react"
import Image from "./Image"
import Price from "./Price"
import TextBox from "./TextBox"
import BuyButton from "./BuyButton"
import { Card } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { productPath } from "../../helpers/routes"

const ProductCard = ({ id, title, imageUrl, price }) => (
  <Card
    className="text-center"
    draggable
    onDragStart={(e) => (e.dataTransfer.setData("text/plain", id), e)}
  >
    <Card.Header><NavLink to={productPath(id)}><TextBox>{title}</TextBox></NavLink></Card.Header>
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
