import React from 'react';

const CanteensList = ({ canteen, dishes, addToCart }) => (
  <div>
    <h1>Canteen: {canteen.name}</h1>
    <br />
    {dishes.map(dish => (
      <button
        type="button"
        key={dish.dishUid}
        onClick={() => addToCart({ dishUid: dish.dishUid, canteenUid: canteen.canteenUid })}
      >
        {dish.name}
      </button>
    ))}
  </div>
);

export default CanteensList;
