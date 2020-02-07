import * as types from '../constants/actionTypes/Cart';

function saveState(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('cart', serialisedState);
  } catch (e) {
    console.log('error occured', e)
  }
}

function loadState() {
  try {
    const serializedState = localStorage.getItem('cart');

    if (serializedState == null)
      return [];

    return JSON.parse(serializedState);
  } catch (e) {
    console.log('error occured', e)
    return [];
  }
}

export default store => next => action => {
  const actions = [types.ADD_PRODUCT, types.REMOVE_PRODUCT, types.LOAD_CART_STATE]

  if (!actions.includes(action.type) ) {
    return next(action)
  }

  if(action.type === types.LOAD_CART_STATE) {
    const cartProducts = loadState();
    return next(Object.assign({}, action, { cartProducts }))
  }

  next(action);
  saveState(store.getState().cart.cartProducts);

  return;
}
