import React from 'react';
import styled from 'styled-components';
import {push} from 'connected-react-router';
import {useDispatch} from 'react-redux';
import logo from '../../assets/img/logo.png';

const media = {
    sp: '@media(max-width: 650px)'
}

const Nav = styled.header`
    background-color: #fff;
    width: 100%;
    z-index: 999;
    position: fixed;
    box-shadow: 0px 3px 15px rgb(0 0 0 / 20%);
    display: flex;
    justify-content:center;
`;

const Size = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
padding: 1em;
width: 1000px;
img {
    cursor: pointer;
    width:10em;
}
ul {
        display: flex;  
        ${media.sp} {
    display: none;
   }
        
        
        li {
            font-size: 1.15em;
            margin-right: 1em;
            cursor: pointer;
            color:#0084be;

        }
    }
`;


const Header = () => {
    const dispatch = useDispatch();
 return(
  <Nav>
      <Size>
      <img onClick={() => dispatch(push('/'))} src={logo} alt="siteTitle"/>
      <ul>
          <li onClick={() => dispatch(push('/about'))}>About</li>
          <li onClick={() => dispatch(push('/works'))}>Work</li>
          <li onClick={() => dispatch(push('/contact'))}>Contact</li>
      </ul>
      </Size>
  </Nav>
 )
}

export default Header;