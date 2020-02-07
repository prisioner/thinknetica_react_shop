import { createStore, applyMiddleware, compose } from "redux"
import CartMiddleware from "../middleware/Cart"
import reducers from "../reducers"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, composeEnhancers(applyMiddleware(CartMiddleware)))

export default store
