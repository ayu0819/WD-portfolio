import React from 'react';
import {SkillChip} from '../UIkit';
import styled from 'styled-components';

const Chips = styled.div`
display: flex;
justify-content: center;
flex-wrap        : wrap;
align-items: center;
 p {
     padding: 0.5em;
 }

`;

const Lists = [
    {
        name: 'HTML5',
        color: 'chip-html'
    },
    {
        name: 'CSS3',
        color: 'chip-css'
    },
    {
        name: 'Javascript(ES2015)',
        color: 'chip-js'
    },
    {
        name: 'React',
        color: 'chip-react'
    }
]

const Langlege = () => {
 return(
<div className="skill__contents-center">
     <h3 className="skill__title">Coding</h3>
     <Chips>
     {Lists.map(list => (
                  <SkillChip key={list.id}  name={list.name} color={list.color} />
                 ))}
     </Chips>
 </div>
 )
}

export default Langlege;