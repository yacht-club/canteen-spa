import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { formatTime, isOpen } from '../utils/timeUtils';
import ItemImageContainer from './common/ItemImageContainer';
import FlexContainer from './common/FlexContainer';
import FlexItem from './common/FlexItem';
import ItemInfoContainer from './common/ItemInfoContainer';
import SubHeader from './common/SubHeader';

const buildings = [{ id: `GZ`, name: `ГЗ` }, { id: `ULK`, name: `УЛК` }];

const CanteenStatusOpen = styled.div`
  float: right;
  display: inline;
  padding: 2px 12px;
  border: 1px solid lightgreen;
  border-radius: 8px;
  color: lightgreen;
`;

const CanteenStatusClosed = styled.div`
  float: right;
  display: inline;
  padding: 2px 12px;
  border: 1px solid red;
  border-radius: 8px;
  color: red;
`;

const CanteensListItem = ({ canteen }) => (
  <Link key={canteen.canteenUid} to={`/canteens/${canteen.canteenUid}`}>
    <ItemImageContainer>
      <img src={canteen.imageUrl} alt={canteen.name} />
      <span>{canteen.name}</span>
    </ItemImageContainer>
    <ItemInfoContainer>
      <h3>{canteen.location}</h3>
      <span>
        с {formatTime(canteen.workFromMillis)} до {formatTime(canteen.workTillMillis)}
      </span>
      {isOpen(canteen.workFromMillis, canteen.workTillMillis) ? (
        <CanteenStatusOpen>Открыто</CanteenStatusOpen>
      ) : (
        <CanteenStatusClosed>Закрыто</CanteenStatusClosed>
      )}
    </ItemInfoContainer>
  </Link>
);

const CanteensList = ({ canteens }) => (
  <div>
    {buildings.map(building => (
      <div>
        <SubHeader>{building.name}</SubHeader>
        <FlexContainer>
          {canteens
            .filter(canteen => canteen.building === building.id)
            .map(canteen => (
              <FlexItem key={canteen.building}>
                <CanteensListItem canteen={canteen} />
              </FlexItem>
            ))}
        </FlexContainer>
      </div>
    ))}
  </div>
);

const CanteensListStyled = styled(CanteensList)``;

export default CanteensListStyled;
