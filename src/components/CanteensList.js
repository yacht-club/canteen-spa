import React from 'react';
import { Link } from 'react-router-dom';

const CanteensList = ({ canteens }) => (
  <div>
    <h1>Canteens</h1>
    {canteens.map(canteen => (
      <Link key={canteen.canteenUid} to={`/canteens/${canteen.canteenUid}`}>
        canteenUid: {canteen.canteenUid} | name: {canteen.name} | location: {canteen.location}
        <br />
      </Link>
    ))}
    <br />
  </div>
);

export default CanteensList;
