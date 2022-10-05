import React from "react";

const ItemCart = ({ data, deleteFromCart }) => {
    const { id, name,price,description } = data
    return (
        <div className="product">
        <div className="product-img"></div>
        <div className="product-detail">
          <h4>{name}</h4>
          <p> {description} </p>
          <div className="buttons">
            <div className="price"> $ {price}</div>
            <button className='btn-card' onClick={() => deleteFromCart(id)}>Delete</button>
          </div>
        </div>
      </div>
    )

}

export default ItemCart;