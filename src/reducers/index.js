import { combineReducers } from 'redux';
import catalog from './Catalog';
import cart from './Cart';

export default combineReducers({
  catalog,
  cart,
});
