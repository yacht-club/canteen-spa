import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import cartIcon from './assets/cart.png';
import CategoryFilter from './CategoryFilter';

const Title = styled.div`
  font-size: 3rem;
  font-weight: 800;
`;

const CartIcon = styled.div`
  display: inline-block;
  background-image: url(${cartIcon});
  background-repeat: no-repeat;
  background-size: 20px 20px;
  width: 20px;
  height: 20px;
`;

const CartWrapper = styled.div`
  a {
    display: flex;
    flex-direction: row;
    align-items: center;

    color: #000;
    font-size: 1.1rem;
    text-decoration: none;
    font-weight: 500;

    &:hover,
    &:active,
    &:focus {
      text-decoration: underline;
    }
  }

  ${CartIcon} {
    margin-right: 8px;
  }
`;

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: flex-start;

    ${CartWrapper} {
      margin: 10px 0;
    }
  }
`;

const Header = ({ categories, selectedCategory, onChangeCategoryFilter, onResetCategoryFilter, className, page }) => (
  <div className={className}>
    <Navbar>
      <Title>{page.name || 'Столовые МГТУ'}</Title>
      <CartWrapper>
        <Link to="/cart">
          <CartIcon /> Моя корзина
        </Link>
      </CartWrapper>
    </Navbar>
    <CategoryFilter
      categories={categories}
      selectedCategory={selectedCategory}
      onChangeCategoryFilter={onChangeCategoryFilter}
      onResetCategoryFilter={onResetCategoryFilter}
      isHomePage={!page.canteenUid}
    />
  </div>
);

const StyledHeader = styled(Header)`
  padding: 0 20px;
  display: flex;
  flex-direction: column;

  ${Navbar} {
    margin-bottom: 12px;
  }
`;

export default StyledHeader;
