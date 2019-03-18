import React from 'react';
import { Link } from 'react-router-dom';
import './CanteensList.css';

const CanteensList = ({ canteens }) => (
  <div>
    <h1>ГЗ</h1>
    <section className="flex-container">
      {canteens.map(canteen => (
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
      ))}
    </section>
    <br />
    <h1>УЛК</h1>
    <br />
  </div>
);

export default CanteensList;
