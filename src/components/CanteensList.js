import React from 'react';
import { Link } from 'react-router-dom';
import './CanteensList.css';
import { formatTime, isOpen } from '../utils/timeUtils';
import ItemImageContainer from './common/ItemImageContainer';
import FlexContainer from './common/FlexContainer';
import FlexItem from './common/FlexItem';

const CanteensList = ({ canteens }) => (
  <div className="canteens-list">
    <h1>ГЗ</h1>
    <FlexContainer>
      {canteens
        .filter(canteen => canteen.building === `GZ`)
        .map(canteen => (
          <FlexItem>
            <CanteensListItem canteen={canteen} />
          </FlexItem>
        ))}
    </FlexContainer>
    <h1>УЛК</h1>
    <FlexContainer>
      {canteens
        .filter(canteen => canteen.building === `ULK`)
        .map(canteen => (
          <FlexItem>
            <CanteensListItem canteen={canteen} />
          </FlexItem>
        ))}
    </FlexContainer>
  </div>
);

const CanteensListItem = ({ canteen }) => (
  <div className="canteens-list-item">
    <Link key={canteen.canteenUid} to={`/canteens/${canteen.canteenUid}`}>
      <ItemImageContainer>
        <img src={canteen.imageUrl} alt={canteen.name} />
        <span>{canteen.name}</span>
      </ItemImageContainer>
      <div>
        <span className="canteen-location">{canteen.location}</span>
        <span className="canteen-working-hours">
          с {formatTime(canteen.workFromMillis)} до {formatTime(canteen.workTillMillis)}
        </span>
        {isOpen(canteen.workFromMillis, canteen.workTillMillis) ? (
          <span className="canteen-status-open">Открыто</span>
        ) : (
          <span className="canteen-status-closed">Закрыто</span>
        )}
      </div>
    </Link>
  </div>
);

export default CanteensList;
