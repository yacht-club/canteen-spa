import React from 'react';
import { Link } from 'react-router-dom';
import './CanteensList.css';

const CanteensList = ({ canteens }) => (
  <div className="canteens-list">
    <h1>ГЗ</h1>
    <section className="flex-container">
      {canteens
        .filter(canteen => canteen.building === `GZ`)
        .map(canteen => (
          <CanteensListItem canteen={canteen} />
        ))}
    </section>
    <h1>УЛК</h1>
    <section className="flex-container">
      {canteens
        .filter(canteen => canteen.building === `ULK`)
        .map(canteen => (
          <CanteensListItem canteen={canteen} />
        ))}
    </section>
  </div>
);

const CanteensListItem = ({ canteen }) => (
  <div className="flex-item canteens-list-item">
    <Link key={canteen.canteenUid} to={`/canteens/${canteen.canteenUid}`}>
      <div className="canteen-img-container">
        <img src={canteen.imageUrl} alt={canteen.name} className="canteen-img" />
        <div className="canteen-name">{canteen.name}</div>
      </div>
      <div>
        <span className="canteen-location">{canteen.location}</span>
        <span className="canteen-working-hours">
          с {canteen.workFromMillis} до {canteen.workTillMillis}
        </span>
        <span className="canteen-status-open">Открыто</span>
      </div>
    </Link>
  </div>
);

export default CanteensList;
