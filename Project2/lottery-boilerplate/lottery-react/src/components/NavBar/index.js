import React from 'react';
import {FaBars} from 'react-icons/fa';
import {
      Nav,
      NavbarContainer,
      NavLogo,
      MobileIcon,
      NavMenu,
      NavItem,
      NavBtn,
      NavBtnLink,
      NavLinks} from './NavbarElements';


const Navbar = () => {
return (
    <>
    <Nav>
    <NavbarContainer>
      <NavLogo to='/'>EthLottery</NavLogo>
      <MobileIcon>
        <FaBars/>
      </MobileIcon>
      <NavMenu>
        <NavItem>
          <NavLinks to='about'>About</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to='about'>How it Works</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to='about'>Leaderboard</NavLinks>
        </NavItem>
      </NavMenu>
      <NavBtn>
       <NavBtnLink to ='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>  
    </>
    );
};

export default Navbar;