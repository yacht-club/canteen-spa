import React from 'react';
import groupBy from 'utils/groupBy';
import Dish from './Dish/index';
import FlexContainer from './common/FlexContainer';
import FlexItem from './common/FlexItem';

const Canteen = ({ canteen, dishes, addToCart, filters }) =>
  groupBy(dishes, 'category').map(({ category, items }) => (
    <React.Fragment>
      <h1>{filters.find(x => x.name === category) && filters.find(x => x.name === category).description}</h1>
      <FlexContainer>
        {items.map((dish, index) => (
          <FlexItem key={String(index)}>
            <Dish
              dish={dish}
              canteen={canteen}
              index={index}
              addToCart={addToCart}
              onClick={() => console.log('asd')}
            />
          </FlexItem>
        ))}
      </FlexContainer>
    </React.Fragment>
  ));

export default Canteen;
