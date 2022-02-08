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
        name: 'Photoshop',
        color: 'chip-psd'
    },
    {
        name: 'Illustrator',
        color: 'chip-ai'
    },
    {
        name: 'XD',
        color: 'chip-xd'
    },
    {
        name: 'Office',
        color: 'chip-office'
    },
    {
        name: 'SpreadSheet',
        color: 'chip-spreadsheet'
    },
    {
        name: 'VScode',
        color: 'chip-vscode'
    },
    {
        name: 'Mac',
        color: 'chip-qualification'
    },    
    {
        name: 'Windows',
        color: 'chip-qualification'
    }
]

const Tools = () => {
 return(
<div className="skill__contents-center">
     <h3 className="skill__title">Tools</h3>
     <Chips>
     {Lists.map(list => (
                  <SkillChip key={list.id}  name={list.name} color={list.color} />
                 ))}
     </Chips>
 </div>
 )
}

export default Tools;