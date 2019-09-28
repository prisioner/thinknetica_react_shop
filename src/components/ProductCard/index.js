import React from "react"
import ImageGallery from "./ImageGallery"
import Price from "./Price"
import TextBox from "./TextBox"
import BuyButton from "./BuyButton"
import { Card } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { productPath } from "../../helpers/routes"
import "./ProductCard.css"

const ProductCard = ({ id, title, images, price }) => (
  <Card
    className="text-center"
    draggable
    onDragStart={(e) => (e.dataTransfer.setData("text/plain", id), e)}
  >
    <Card.Header><NavLink to={productPath(id)}><TextBox>{title}</TextBox></NavLink></Card.Header>
    <Card.Body>
      <ImageGallery images={images} alt={title} />
      <Price price={price} />
    </Card.Body>
    <Card.Footer>
      <BuyButton productId={id} />
    </Card.Footer>
  </Card>
)

export default ProductCard
