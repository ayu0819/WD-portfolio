import React from 'react';
import styled from 'styled-components';

const Chip = styled.p`
    color: #fff;
    margin: 5px;
    width: 100%;
    max-width: 15em;
    padding: 15px;
    max-width: auto;
    box-shadow: 0 0 30px rgb(43 43 43 / 20%);
    border-radius: 30px;
    /* background: linear-gradient(#52d7ff,#9dd5ff); */
    color: #fff;
`;



const SkillChip = (props) => {
 return(
 <Chip className={props.color}>{props.name}</Chip>
 )
}

export default SkillChip;

