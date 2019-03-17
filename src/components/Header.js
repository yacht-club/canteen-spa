import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    --------------------------------
    <br />
    <Link to="/">To Canteens List</Link>
    <br />
    <Link to="/cart">To Cart</Link>
    <br />
    --------------------------------
  </div>
);

export default Header;
