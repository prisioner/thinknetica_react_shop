import React from "react"
import Image from "./Image"
import Price from "./Price"
import TextBox from "./TextBox"

const ProductCard = (props) => (
  <div style={{ textAlign: "center", marginBottom: "20px" }}>
    <TextBox text={props.text} /><br />
    <Image src={props.src} width={120} height={120} alt={`[${props.text}]`} /><br />
    <Price price={props.price} />
  </div>
)

export default ProductCard
