import React from 'react';
import dishIcon from './assets/food.jpeg';
import ItemImageContainer from '../common/ItemImageContainer';

const Dish = ({ dish, canteen, index, addToCart }) => (
  <div>
    <ItemImageContainer>
      <img src={dishIcon} alt={dish.name} />
      <span>{dish.name}</span>
    </ItemImageContainer>
    <button
      type="button"
      key={String(index)}
      onClick={() => addToCart({ dishUid: dish.dishUid, canteenUid: canteen.canteenUid })}
    >
      Добавить в корзину
    </button>
  </div>
);

export default Dish;
