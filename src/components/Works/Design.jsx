import React from 'react';
import {Card} from '../UIkit';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilRuler,faLaptop } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';

const Cards = styled.div`
margin-top: 1em;
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
        img: 'work-app',
        title: 'アプリUIデザイン',
        text: 'PayアプリのUI設計です。',
        data: '2020/08/10',
        icon: <FontAwesomeIcon className="categoryIcon" icon={faLaptop} />,
        category: 'UI',
        link: '/works/churchicon'
    }
]

const Design = (props) => {
 return(
 <div className="common__contents-center">
     <h3>Design</h3>
     <Cards>
     {Lists.map(list => (
                  <Card key={list.id}  img={list.img} title={list.title} text={list.text} data={list.data} icon={list.icon} category={list.category} link={list.link} />
                 ))}
     </Cards>
 </div>
 )
}

export default Design;