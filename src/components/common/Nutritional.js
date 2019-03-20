import React from 'react';
import styled from 'styled-components';

const sumOnField = field => items =>
  items
    .map(item => item[field])
    .reduce((acc, v) => acc + v, 0)
    .toFixed(1);

const Nutritional = ({ className, items }) => (
  <div className={className}>
    <div className="nutrient">Белки: {sumOnField('proteins')(items)}</div>
    <div className="nutrient">Жиры: {sumOnField('fats')(items)}</div>
    <div className="nutrient">Углеводы: {sumOnField('carbohydrates')(items)}</div>
  </div>
);

const StyledNutritional = styled(Nutritional)`
  .nutrient {
    margin-bottom: 6px;
  }

  font-size: 0.95rem;
  font-weight: 500;
  color: #666;
`;

export default StyledNutritional;
