import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CategoryButton = styled.button`
  border: none;
  font-size: 0.9rem;
  font-weight: 500;
  outline: none;
  border-radius: 200px;
  padding: 4px 16px;
  cursor: pointer;
  border: 1px solid #f76424;

  ${props =>
    props.isSelected
      ? `
      background-color: #f76424;
      color: #fff;
      `
      : `
      color: #f76424;
      background-color: transparent;
      `}

  &:hover,
  &:focus,
  &:active {
    background-color: #f76424;
    color: #fff;
  }
`;

const HomePageLinkWrapper = styled.div`
  display: inline-flex;

  a {
    ${props =>
      props.isSelected
        ? `
      background-color: #f76424;
      color: #fff;
      `
        : `
      color: #f76424
      background-color: transparent;
      `}
    border: 1px solid #f76424;
    border-radius: 200px;
    padding: 4px 16px;

    font-size: 0.9rem;
    font-weight: 500;
    text-decoration: none;
  }
`;

const CategoryFilter = ({
  className,
  categories,
  selectedCategory,
  onChangeCategoryFilter,
  onResetCategoryFilter,
  isHomePage,
}) => (
  <div className={className}>
    <HomePageLinkWrapper isSelected={isHomePage}>
      <Link to="/">Все столовые</Link>
    </HomePageLinkWrapper>
    {!isHomePage ? (
      <React.Fragment>
        <CategoryButton onClick={onResetCategoryFilter} isSelected={selectedCategory === null}>
          Все блюда
        </CategoryButton>
        {categories.map(category => (
          <CategoryButton
            isSelected={selectedCategory === category.name}
            onClick={() => onChangeCategoryFilter({ value: category.name })}
            key={category.name}
          >
            {category.description}
          </CategoryButton>
        ))}
      </React.Fragment>
    ) : null}
  </div>
);

const StyledCategoryFilter = styled(CategoryFilter)`
  box-sizing: border-box;
  overflow-x: scroll;
  white-space: nowrap;

  ${HomePageLinkWrapper} {
    margin-right: 4px;
  }

  ${CategoryButton} + ${CategoryButton} {
    margin-left: 4px;
  }
`;

export default StyledCategoryFilter;
