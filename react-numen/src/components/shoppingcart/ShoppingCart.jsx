import React, { useReducer } from 'react';
import { shoppingInitialState, shoppingReducer } from '../../reducers/shoppingReducers';
import { TYPES } from '../actions/ShoppingCartActions';
import ItemCart from '../products/ItemCart';
import Product from '../products/Product';


const ShoppingCart = () => {

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)

  const { products, cart } = state

  const addToCart = (id) => {
    console.log(id);
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const deleteFromCart = (id) => {
    dispatch({ type: TYPES.REMOVE_PRODUCT, payload: id })
  };

  const clearCart = () => { 
    dispatch({type:TYPES.CLEAR_CART})
  };


  return (
    <div>
      <h3>Our Services</h3>
      <div className="grid-responsive">
        {products.map((product) => <Product key={product.id} data={product} addToCart={addToCart} />)}
      </div>
      <h3>Carrito</h3>
      <div className="box">
        {cart.map((item, index) => <ItemCart key={index}
          data={item} deleteFromCart={deleteFromCart} />)}
      </div>
      <button className='buttons' onClick={clearCart}>Limpiar Carrito</button>
    </div>
  )
}

export default ShoppingCart;