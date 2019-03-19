import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { formatTime, isOpen } from '../utils/timeUtils';
import ItemImageContainer from './common/ItemImageContainer';
import FlexContainer from './common/FlexContainer';
import FlexItem from './common/FlexItem';
import SubHeader from './common/SubHeader';

const buildings = [{ id: `GZ`, name: `ГЗ` }, { id: `ULK`, name: `УЛК` }];

const CanteenStatusOpen = styled.div`
  float: right;
  padding: 2px 12px;
  border: 1px solid lightgreen;
  border-radius: 8px;
  color: lightgreen;
`;

const CanteenStatusClosed = styled.div`
  float: right;
  padding: 2px 12px;
  border: 1px solid red;
  border-radius: 8px;
  color: red;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Location = styled.div`
  display: block;
  font-size: 2rem;
  font-weight: bold;
  color: grey;
`;

const WorkingHours = styled.div`
  color: grey;
`;

const TimeInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CanteensListItem = ({ canteen }) => (
  <React.Fragment>
    <Link key={canteen.canteenUid} to={`/canteens/${canteen.canteenUid}`}>
      <ItemImageContainer>
        <img src={canteen.imageUrl} alt={canteen.name} />
        <span>{canteen.name}</span>
      </ItemImageContainer>
    </Link>
    <InfoContainer>
      <Location>{canteen.location}</Location>
      <TimeInfoContainer>
        <WorkingHours>
          с {formatTime(canteen.workFromMillis)} до {formatTime(canteen.workTillMillis)}
        </WorkingHours>
        {isOpen(canteen.workFromMillis, canteen.workTillMillis) ? (
          <CanteenStatusOpen>Открыто</CanteenStatusOpen>
        ) : (
          <CanteenStatusClosed>Закрыто</CanteenStatusClosed>
        )}
      </TimeInfoContainer>
    </InfoContainer>
  </React.Fragment>
);

const CanteensList = ({ canteens }) => (
  <div>
    {buildings.map(building => (
      <React.Fragment>
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
      </React.Fragment>
    ))}
  </div>
);

const CanteensListStyled = styled(CanteensList)``;

export default CanteensListStyled;
