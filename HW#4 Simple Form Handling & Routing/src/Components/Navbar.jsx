import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/fav">Favourites</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;

