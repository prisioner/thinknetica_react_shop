import React from "react"
import CatalogPage from "./CatalogPage"
import CartContainer from "./CartContainer"

const App = () => {
  return(
    <CartContainer>
      <CatalogPage />
    </CartContainer>
  )
}

export default App
