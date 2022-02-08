import React from 'react';
import {HobbyCard} from '../UIkit';
import styled from 'styled-components';

const Cards = styled.div`
display: flex;
justify-content: center;
flex-wrap        : wrap;
align-items: center;
`;

const Lists = [
    {
        name: 'コーディング',
        img: 'hobby-coding'
    },
    {
        name: '料理',
        img: 'hobby-cooking'
    },
    {
        name: 'サイクリング',
        img: 'hobby-cycling'
    }
]

const Hobby = (props) => {
 return(
<div className="back__gray">
    <div className="common__size">
     <h3>Hobby</h3>
     <Cards>
     {Lists.map(list => (
                  <HobbyCard key={list.id}  name={list.name} img={list.img} />
                 ))}
     </Cards>
 </div>
 </div>
 )
}

export default Hobby;