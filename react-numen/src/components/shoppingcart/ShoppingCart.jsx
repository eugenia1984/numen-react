import React from 'react'

const ShoppingCart = () => {

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)

  const addToCart = () => { };

  const deleteFromCart = () => { };

  const clearCart = () => { };


  return (
    <div>
      <h2>Shopping Cart</h2>
      <h3>Products</h3>
      <div className="shopping_cart"></div>
      <h3>Carrito</h3>
      <div className="box"></div>
      <button>Limpiar Carrito</button>
    </div>
  )
}

export { ShoppingCart };