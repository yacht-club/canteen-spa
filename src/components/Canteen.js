import React from 'react';

const Canteen = ({ canteen, dishes, addToCart, filters, onChangeFilter, onClearFilters }) => (
  <div>
    <h1>{canteen.name}</h1>
    <br />
    <h2>Filters:</h2>
    <button onClick={onClearFilters} type="button">
      Все блюда
    </button>
    {filters.map(filter => (
      <button onClick={() => onChangeFilter({ value: filter.name })} type="button">
        {filter.description}
      </button>
    ))}
    <br />
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
