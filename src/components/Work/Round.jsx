import React from 'react';
import styled from 'styled-components';

const Icon = styled.div`
    top: 50%;
    left: 50%;
    margin: 0;
    padding: 16px;
    position: absolute;
    font-size: 30px;
    transform: translate(-50%, -50%);
`;

const Items = styled.div`

`;

const Round = (props) => {

 return(

  <Icon>
  <i>{props.icon}</i>
  </Icon>
 )
}

export default Round;