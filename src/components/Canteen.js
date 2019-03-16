import React from 'react';
import Button from 'components/common/Button';

const CounterContainer = ({ onClickGetCanteens, canteens, onChangeCanteen, selectedCanteenUid, dishes }) => (
  <div>
    <h1>Canteens</h1>
    {canteens.map(canteen => (
      <div key={canteen.canteenUid}>
        canteenUid: {canteen.canteenUid} | name: {canteen.name} | location: {canteen.location}
      </div>
    ))}
    <br />
    <Button onClick={onClickGetCanteens}>GetCanteens</Button>
    <br />

    <select onChange={e => onChangeCanteen({ value: e.target.value })} value={selectedCanteenUid}>
      {canteens.map(canteen => (
        <option value={canteen.canteenUid} key={canteen.canteenUid}>
          {canteen.name}
        </option>
      ))}
    </select>

    <h1>Dishes</h1>
    {dishes.map(dish => (
      <div key={dish.dishUid}>
        dishUid: {dish.dishUid} | name: {dish.name} | category: {dish.category}
      </div>
    ))}
  </div>
);

export default CounterContainer;
