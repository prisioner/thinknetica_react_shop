import React from "react"
import Image from "./Image"
import Price from "./Price"
import TextBox from "./TextBox"

const ProductCard = ({title, imageUrl, price}) => (
  <div style={{ textAlign: "center", marginBottom: "20px" }}>
    <TextBox>{title}</TextBox><br />
    <Image src={imageUrl} width={120} height={120} alt={`[${title}]`} /><br />
    <Price price={price} />
  </div>
)

export default ProductCard
