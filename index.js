import React, { Component } from "react"
import ReactDOM from "react-dom"
import Catalog from "~/src/components/Catalog"

class App extends Component {
  render() {
    return(
      <div>
        <Catalog />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
)
