import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, Logo, NavButtons } from './Header.styled'; // Додайте NavButtons

function Header() {
  return (
    <HeaderContainer>
      <div className="logo">
        <Logo>
          RentCar Ukraine
        </Logo>
      </div>
      <NavButtons>
        <Link to="/catalog">List</Link> 
        <Link to="/favorites">Favorite</Link> 
      </NavButtons>
    </HeaderContainer>
  );
}

export default Header;