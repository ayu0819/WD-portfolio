import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Contents = styled.div`
    margin: 2.5em 0;
    display:flex;
    justify-content:center;
`;





const Header = () => {
 return(
    <Contents>
    <a href="https://www.facebook.com/ayu0819" target="blank"><FontAwesomeIcon className="icon icon-facebook" icon={faFacebook} /></a>
    <a href="https://twitter.com/0819_tateishi" target="blank"><FontAwesomeIcon className="icon icon-twitter" icon={faTwitter} /></a>
    <a href="https://www.linkedin.com/in/ayu-tateishi-0a74891b1/" target="blank"><FontAwesomeIcon className="icon icon-linkdin" icon={faLinkedin} /></a>
    </Contents>
 )
}

export default Header;