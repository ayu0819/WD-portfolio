import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faLaptop,faStar,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from 'react-redux';
import {push} from 'connected-react-router';

const media = {
    sp: '@media(max-width: 650px)'
}

const Nav = styled.nav`
 margin: 1em;
 display: none;
 background-color: #fff;
 width: 90%;
 border-radius: 1em;
 box-shadow: 0px 3px 15px rgb(0 0 0 / 20%);
 position: fixed;
 bottom: 1.5em;
 z-index: 999;
 ${media.sp} {
    display: block;
   }
   i {
       color: #0084be;
       font-size: 0.5em;
       margin: 0 auto;
       padding: 0.2em 0;
   }
   p {
       font-size: 0.8em;
       margin: 0 auto;
       padding: 0.2em 0;
       color: #0084be !important;
       font-weight: bold;
   }
   a {
    color: #0084be !important;
   }
`;

const Item = styled.div`
 margin: 0 0.7em;
 cursor: pointer;
 text-align: center;
`;

const Items = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 margin: 1em 0;
`;

const ItemLink = styled.a`
 padding: 0 0.5;
 cursor: pointer;
 text-align: center;
`;

const NavMb = () => {
    const dispatch = useDispatch();

 return(
<Nav>

<Items>
<Item onClick={() => dispatch(push('/'))}>    
 <i><FontAwesomeIcon className="icon icon-facebook" icon={faHome} /></i>
 <p>home</p>
</Item>

<Item onClick={() => dispatch(push('/works'))}>    
 <i><FontAwesomeIcon className="icon icon-facebook" icon={faLaptop} /></i>
 <p>work</p>
</Item>

<a href="https://ratio.ym-tane.com/" target="blank">
<Item>    
 <i><FontAwesomeIcon className="icon icon-facebook" icon={faStar} /></i>
 <p>blog</p>
</Item>
</a>

<Item onClick={() => dispatch(push('/contact'))}>    
 <i><FontAwesomeIcon className="icon icon-facebook" icon={faEnvelope} /></i>
 <p>contact</p>
</Item>
</Items>

</Nav>
 )
}

export default NavMb;