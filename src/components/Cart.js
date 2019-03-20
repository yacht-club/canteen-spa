import React from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';
import CartTable from 'components/common/CartTable';
import Nutritional from 'components/common/Nutritional';

const AmountText = styled.div`
  font-size: 2rem;
  font-weight: 500;
  margin: 30px 0 20px 0;
`;

const Separator = styled.div`
  border-bottom: 1px solid #ddd;
  margin: 10px 0;
`;

const Cart = ({ cartItems, className }) => (
  <div className={className}>
    <h1>Корзина</h1>

    {cartItems && cartItems.length ? (
      <React.Fragment>
        <CartTable items={cartItems} />
        <Separator />
        <Nutritional items={cartItems} />
        <AmountText>К оплате: {cartItems.reduce((acc, v) => acc + v.price, 0)} рублей.</AmountText>
        <Button large>Оплатить</Button>
      </React.Fragment>
    ) : (
      <AmountText>Ваша корзина пуста.</AmountText>
    )}
  </div>
);

const StyledCart = styled(Cart)`
  max-width: 400px;
  margin: auto;
`;

export default StyledCart;
