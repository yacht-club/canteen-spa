import React from 'react';

const Canteen = ({ canteen, dishes, addToCart }) => (
  <div>
    {dishes.map((dish, index) => (
      <button
        type="button"
        key={String(index)}
        onClick={() => addToCart({ dishUid: dish.dishUid, canteenUid: canteen.canteenUid })}
      >
        {dish.name}
      </button>
    ))}
  </div>
);

export default Canteen;
