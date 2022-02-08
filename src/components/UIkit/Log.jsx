import React from 'react';
import styled from 'styled-components';

const LogItem = styled.div`
    border-bottom-style: dotted;
    border-color: #efefef;
    text-align: left;
    width: 100%;
    display:flex;
    align-items:center;
`;

const Data = styled.p`
    /* margin-left:2.5em; */
`;

const MainText = styled.p`
    margin-left:2.5em;
    font-weight: bold;
`;



const Log = (props) => {
 return(
 <LogItem>
 <Data><small>{props.data}</small></Data>
 <MainText>{props.text}</MainText>
</LogItem>
 )
}

export default Log;