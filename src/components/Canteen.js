import React from 'react';

const CanteensList = ({ canteen, dishes, addToCart, filters, onChangeFilter, onClearFilters }) => (
  <div>
    <h1>Canteen: {canteen.name}</h1>
    <br />
    <h2>Filters:</h2>
    <button onClick={onClearFilters} type="button">
      Clear Filters
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

export default CanteensList;
