import React from 'react';
import Button from 'components/common/Button';
import styled from 'styled-components';
import defaultDishIcon from './assets/food.jpeg';
import drinkIcon from './assets/drink.jpg';
import soupIcon from './assets/soup.jpg';
import meatIcon from './assets/meat.jpg';
import saladIcon from './assets/salad.jpg';
import garnishIcon from './assets/garnish.jpg';
import dessertIcon from './assets/dessert.jpg';
import ItemImageContainer from '../common/ItemImageContainer';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const DescriptionContainer = styled.div``;

const Price = styled.div`
  display: block;
  font-size: 2rem;
  font-weight: bold;
  color: grey;
`;
const Weight = styled.div`
  color: grey;
`;

const dishIcon = category => {
  switch (category) {
    case `SOUP`:
      return soupIcon;
    case `MAINCOURSE`:
      return meatIcon;
    case `GARNISH`:
      return garnishIcon;
    case `SALAD`:
      return saladIcon;
    case `DRINK`:
      return drinkIcon;
    case `DESSERT`:
      return dessertIcon;
    default:
      return defaultDishIcon;
  }
};

const Dish = ({ dish, canteen, addToCart, className }) => (
  <div className={className}>
    <ItemImageContainer>
      <img src={dishIcon(dish.category)} alt={dish.name} />
      <span>{dish.name}</span>
    </ItemImageContainer>
    <InfoContainer>
      <DescriptionContainer>
        <Price>{dish.price} руб</Price>
        <Weight>{dish.weight} гр.</Weight>
      </DescriptionContainer>
      <Button type="button" onClick={() => addToCart({ dishUid: dish.dishUid, canteenUid: canteen.canteenUid })}>
        Добавить <br /> в корзину
      </Button>
    </InfoContainer>
  </div>
);

const StyledDish = styled(Dish)``;

export default StyledDish;
