import React, {useReducer} from 'react'
import { shoppingInitialState, shoppingReducer } from '../../reducers/shoppingReducers';
import ItemCart from '../products/ItemCart';
import Product from '../products/Product';


const ShoppingCart = () => {

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState )
  const { products, cart } = state
  const addToCart = () => { };

  const deleteFromCart = () => { };

  const clearCart = () => { };


  return (
    <div>
      <h2>Shopping Cart</h2>
      <h3>Products</h3>
      <div className="box grid-responsive">
        {products.map((product) => <Product key={product.id} data={product} addToCart={addToCart} />)}
      </div>
      <h3>Carrito</h3>
      <div className="box">
        {cart.map((item, index) => <ItemCart key={index}
          data={item} deleteFromCart={deleteFromCart} />)}
      </div>
      <button onClick={clearCart}>Limpiar Carrito</button>
    </div>
  )
}

export default ShoppingCart;