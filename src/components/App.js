import React, { Fragment } from "react"
import CartContainer from "./CartContainer"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import MainMenu from "./MainMenu"
import routes from "../routes"

const RouteWithSubroutes = (route, key) => <Route key={key} { ...route } />

const App = () => {
  return(
    <CartContainer>
      <Router>
        <Fragment>
          <MainMenu />
          <Switch>
            { routes.map((route, key) => RouteWithSubroutes(route, key)) }
          </Switch>
        </Fragment>
      </Router>
    </CartContainer>
  )
}

export default App
