import React from "react";
import { Link } from "react-router-dom";

const NoItemsInCart = () => {
  return (
    <div className="no-cart-container">
      <i className="fas fa-shopping-cart mr-2"></i>
      <h3>Looks like you have no items in your shopping cart.</h3>
      <p>
        Click <Link to="/">Here</Link> to continue Shopping
      </p>
    </div>
  );
};

export default NoItemsInCart;
