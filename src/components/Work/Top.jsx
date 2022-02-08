import React from 'react';
import styled from 'styled-components';

const TopImage = styled.div`
    height: 25em;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    border-radius: 1em;
    width: 100%;
    max-width: 40em;
    margin: 0 auto;
`;


const Top = (props) => {

 return(

    <div className="back__white">
    <div className="common__size">
 <TopImage className={props.image} />
 </div>
 </div>

 )
}

export default Top;