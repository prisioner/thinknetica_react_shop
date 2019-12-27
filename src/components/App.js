import React, { Fragment } from "react"
import CartContainer from "./CartContainer"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import MainMenu from "./MainMenu"
import routes from "../routes"
import { Provider } from "react-redux"
import store from "../store"

const RouteWithSubroutes = (route, key) => <Route key={key} { ...route } />

const App = () => {
  return(
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
