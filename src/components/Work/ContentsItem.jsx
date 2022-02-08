import React from 'react';
import styled from 'styled-components';
import {Round} from '../Work';

const Icon = styled.div`
    background-color: #fff;
    border-radius: 50%;
    padding: 0.5em;
    box-shadow: 0 0 30px rgb(43 43 43 / 20%);
    width: 2.2em;
    height: 2.2em;
    font-size: 1.3em;
    margin: 0 0.35em;
    i {
      position:relative;
        top:0.3em;
    }
`;

const Items = styled.div`
 display: flex;
`;

const ContentsItem = (props) => {

 return(
 <a href={props.link} target="blank" className={props.pointer}>
 <Icon>
   <i>{props.icon}</i>
 </Icon>
 </a>
 )
}

export default ContentsItem;