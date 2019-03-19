import React from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';
import CartTable from './CartTable';

const AmountText = styled.div`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 20px;
`;

const Checkout = ({ cartItems }) => (
  <div>
    <h1>Корзина</h1>

    {cartItems && cartItems.length ? (
      <React.Fragment>
        <CartTable items={cartItems} />
        <AmountText>К оплате: {cartItems.reduce((acc, v) => acc + v.price, 0)} рублей.</AmountText>
        <Button large>Оплатить</Button>
      </React.Fragment>
    ) : (
      <AmountText>Ваша корзина пуста.</AmountText>
    )}
  </div>
);

export default Checkout;
