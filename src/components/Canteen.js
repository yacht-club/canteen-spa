import React from 'react';
import Dish from './Dish/index';
import FlexContainer from './common/FlexContainer';
import FlexItem from './common/FlexItem';

const Canteen = ({ canteen, dishes, addToCart }) => (
  <FlexContainer>
    {dishes.map((dish, index) => (
      <FlexItem>
        <Dish dish={dish} canteen={canteen} index={index} addToCart={addToCart} />
      </FlexItem>
    ))}
  </FlexContainer>
);

export default Canteen;
