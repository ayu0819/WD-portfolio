import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
font-size: 1.2em;
    background: linear-gradient(#6FE5F5, #1CD2F5);
`;

const PrimaryButton = (props) => {
    
 return(
    <Button className={props.class}
            onClick={() => props.onClick()}
    >
      {props.label}
    </Button>
 )
}

export default PrimaryButton;