import React from 'react';
import styled from 'styled-components';
import top from '../../assets/img/background.png';


const Head = styled.header`
    position: relative;
    background-color: #7fffd4;
    background: url(${top}) center center / cover no-repeat;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    h2 {
    color: #fff;
    font-size: 4em;
    padding: 230px 50px 130px;
    text-align: center;
    }
`;


const Main = (props) => {
 return(
  <Head>
      <h2>{props.title}</h2>
  </Head>
 )
}

export default Main;