import React, { Component } from "react"
import ReactDOM from "react-dom"
import CatalogPage from "~/src/components/CatalogPage"
import CartContainer from "~/src/components/CartContainer"
import "bootstrap/dist/css/bootstrap.css"

class App extends Component {
  render() {
    return(
      <CartContainer>
        <CatalogPage />
      </CartContainer>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
)
