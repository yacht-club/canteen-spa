import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import cartImg from './img/cart.png';

const Header = () => (
  <div className="header">
    --------------------------------
    <br />
    <Link to="/">Все столовые</Link>
    <br />
    <div className="cart">
      <Link to="/cart">
        <img src={cartImg} alt="Корзина" className="cart-img" />
        <span className="cart-text">Моя корзина</span>
      </Link>
    </div>
    <br />
    --------------------------------
  </div>
);

export default Header;
