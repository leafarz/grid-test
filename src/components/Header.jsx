// libraries
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// components
import Brand from './Brand';

// styled elements
import g from './../js/global';
import List from '../elements/List';

const Header = () => {
  // + styles
  const HeaderContainer = styled.header`
    background-image: linear-gradient(${g.BGColor1}, rgb(10, 10, 10));
    font-weight: 600;
    
    &::after{
      content: '';
      display: table;
      clear: both;
    }
  `;

  const NavContainer = styled.nav`
    color: white;
    margin: 0 ${g.Margin[0]}px;

    @media ${g.Sizes.M} {
      margin: 0 ${g.Margin[1]}px;
    }
  `;
  const BrandContainer = styled.div`
    float: left;

    @media ${g.Sizes.S} {
      float: none;
      text-align: center;

      a {
        justify-content: center;
      }
    }
  `;
  const RightNav = styled.nav`
    float: right;

    @media ${g.Sizes.S} {
      float: none;
      text-align: center;

      ul {
        display: block;
      }
    }
    
  `;

  const SLink = styled(Link)`
    text-decoration: none;
    color: white;

    a {
      text-decoration:none;
      color: white;
    }

    &:hover {
      transition: 0.3s;
      background-color: rgb(77, 77, 77);
    }
  `;
  // - styles

  return (
    <HeaderContainer>
      <NavContainer>
        <BrandContainer>
          <Brand />
        </BrandContainer>

        <RightNav>
          <List.ul>
            <SLink to='/'><List.li>Home</List.li></SLink>
            <SLink to='/games'><List.li>Games</List.li></SLink>
            <SLink to='/news'><List.li>News</List.li></SLink>
            <SLink to='/careers'><List.li>Careers</List.li></SLink>
            <SLink to='/contact'><List.li>Contact</List.li></SLink>
            <SLink to='/about'><List.li>About</List.li></SLink>
          </List.ul>
        </RightNav>
      </NavContainer>
    </HeaderContainer>
  )
}

export default Header
