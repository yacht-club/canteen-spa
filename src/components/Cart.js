import React from 'react';

const Checkout = ({ cartItems }) => (
  <div>
    <h1>Checkout</h1>
    <br />
    {cartItems.map(cartItem => (
      <div key={cartItem.dishUid}>
        {cartItem.name} -- {cartItem.price}
      </div>
    ))}
  </div>
);

export default Checkout;
