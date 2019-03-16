import React from 'react';
import Button from 'components/common/Button';

const CounterContainer = ({ onClickGetCanteens, canteens }) => (
  <div>
    {JSON.stringify(canteens)}
    <br />
    <Button onClick={onClickGetCanteens}>Get</Button>
  </div>
);

export default CounterContainer;
