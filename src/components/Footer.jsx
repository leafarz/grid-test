// libraries
import React from 'react';
import styled from 'styled-components';

// styled elements
import Grid from './../elements/Grid';
import g from './../js/global';

// textures
import icn_fb from './../assets/textures/webicon-facebook-s.png';
import icn_twitter from './../assets/textures/webicon-twitter-s.png';
import icn_ig from './../assets/textures/webicon-instagram-s.png';

const Footer = () => {
  const GridContainer = styled(Grid.Container)`
    @media ${g.Sizes.S} {
      display: block;
      padding: 0;
      grid-gap: 0;
    }
  `;
  const SFooter = styled.footer`
    background-color: ${g.BGColor2};
    color: white;
    text-align: center;
  `;

  const UL = styled.ul`
    list-style-type: none;
    text-decoration: none;
  `;
  const LI = styled.li`
    padding: 5px 0;
    a {
      text-decoration: none;
      color: white;

      &:hover {
        text-decoration: underline;
      }
    }
  `;
  const GridItem = styled(Grid.Item)`
    h1 {
      padding: 20px;
    }
    
    @media ${g.Sizes.S} {
      text-align: left;

      h1{
        padding: 0;
      }
      
      &:nth-child(even) {
        background-color: rgba(30, 30, 30, 0.9);
      }
    }
  `;

  return (
    <SFooter>
      <GridContainer columns={3} padding={20} gap={20}>
        <GridItem centered>
          <h1>Navigation</h1>
          <UL>
            <LI><a href='/'>Home</a></LI>
            <LI><a href='/games'>Games</a></LI>
            <LI><a href='/news'>News</a></LI>
          </UL>
        </GridItem>

        <GridItem centered>
          <UL>
            <h1>Social</h1>
            <LI><a href='#facebook'><img src={icn_fb} alt=""/> Facebook</a></LI>
            <LI><a href='#twitter'><img src={icn_twitter} alt=""/> Twitter</a></LI>
            <LI><a href='#instagram'><img src={icn_ig} alt=""/> Instagram</a></LI>
          </UL>
        </GridItem>
        <GridItem centered>
          <UL>
            <h1>Information</h1>
            <LI><a href='#terms-conditions'>Terms & Conditions</a></LI>
            <LI><a href='#private-policy'>Private Policy</a></LI>
            <LI><a href='#careers'>Careers</a></LI>
            <LI><a href='#contact-us'>Contact Us</a></LI>
            <LI><a href='#about'>About</a></LI>
          </UL>
        </GridItem>
      </GridContainer>
    </SFooter>
  )
}

export default Footer
