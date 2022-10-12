import React, { useReducer, useState, useEffect } from 'react';
import axios from 'axios';
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

  const deleteFromCart = (id, all = false) => {
    console.log(id, all)
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id })
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id })
    }
  };

  const clearCart = (id) => {
    dispatch({ type: TYPES.CLEAR_CART, payload: id })
  };

  const [tipo, settipo] = useState([]);

  useEffect(() => {
    axios("http://localhost:3001/cardsP")
      .then(res => {
        settipo(res.data)
        dispatch({ type: TYPES.ADD_PRODUCTS, payload: res.data })
      }
      );
  }, [])

  console.log(cart);

  return (
    <div>
      <h3>Our Services</h3>
      <div className="grid-responsive">
        {products.map((product) => <Product key={product.id} data={product} addToCart={addToCart} />)}
      </div>
      <div className="carrito">
        <h3>Carrito</h3>
        <div className="box">
          {cart.map((item, index) => <ItemCart key={index}
            data={item} deleteFromCart={deleteFromCart} />)}

        </div>
        <div className="botonesCarrito">
          <button className='buttonCart' onClick={clearCart}>Limpiar Carrito</button>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart;