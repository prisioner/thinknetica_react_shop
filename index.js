import React, { Component } from "react"
import ReactDOM from "react-dom"
import Catalog from "~/src/components/Catalog"
import "bootstrap/dist/css/bootstrap.css"

class App extends Component {
  render() {
    return(
      <Catalog />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
)
