import { createContext } from "react"

export default createContext({
  cartProducts: {},
  addProduct: (product, count) => {},
})
