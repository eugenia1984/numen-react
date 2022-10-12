import React from "react";

const ItemCart = ({ data, deleteFromCart }) => {
    const { id, image, name,price,description, quantity} = data
    return (
        <div className="product">
        <div className="product-img">
        <img  src={image} alt="img.product" />
        </div>
        <div className="product-detail">
          <h4>{name}</h4>
          <p> {description} </p>
          <div className="buttons">
            <div className="price"> $ {price} x {quantity} = ${price * quantity}</div>
            <button className='btn-card' onClick={() => deleteFromCart(id)}>elimina uno</button>
            <button className='btn-card' onClick={() => deleteFromCart(id)}>Delete</button>
          </div>
        </div>
      </div>
    )

}

export default ItemCart;