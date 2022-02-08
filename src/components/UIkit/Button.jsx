import React from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {push} from 'connected-react-router';

const ButtonItem = styled.button`
font-size: 1.2em;
    background: linear-gradient(#6FE5F5, #1CD2F5);
`;



const Button = (props) => {
    const dispatch = useDispatch();
 return(
 <ButtonItem onClick={() => dispatch(push(props.link))}>
     {props.text}
 </ButtonItem>
 )
}

export default Button;