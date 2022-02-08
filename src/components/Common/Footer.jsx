import React from 'react';
import styled from 'styled-components';

const FooterNav = styled.footer`
    background-color: #555;
    width: 100%;
    display:flex;
    justify-content:center;

`;

const Size = styled.div`
    display:flex;
justify-content: space-between;
align-items: center;
padding: 0.5em 1em;
width: 1000px;
p{
    color:#fff;
}
`;

const Footer = () => {
 return(
  <FooterNav>
   <Size>
   <p><small>portfolio</small></p>
    {/* <p><small>name</small></p> */}
   </Size>
  </FooterNav>
 )
}

export default Footer;