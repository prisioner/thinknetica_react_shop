import { cartPath } from "../helpers/routes"
import CartPage from "../components/CartPage"

export default {
  path: cartPath(),
  component: CartPage,
  exact: true,
  strict: true,
}
