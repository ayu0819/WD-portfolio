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
        name: '色彩検定',
        color: 'chip-qualification'
    },
    {
        name: 'GOETHE-ZERTIFIKAT A1',
        color: 'chip-qualification'
    }
]

const Qualification = () => {
 return(
<div className="skill__contents-center">
     <h3 className="skill__title">Qualification</h3>
     <Chips>
     {Lists.map(list => (
                  <SkillChip key={list.id}  name={list.name} color={list.color} />
                 ))}
     </Chips>
 </div>
 )
}

export default Qualification;