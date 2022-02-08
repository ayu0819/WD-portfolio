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
         img: 'work-ec',
         title: 'ゲームECサイト',
         text: 'Reduxを使用して作成したデモECサイトです。',
         data: '2021/04/13',
         category: 'ec-site',
         icon: <FontAwesomeIcon className="categoryIcon" icon={faLaptop} />,
         link: '/works/ec'
     },
    {
        img: 'work-portfolio',
        title: 'ポートフォリオサイト',
        text: '私のポートフォリオサイトとして作成しました。',
        data: '2020/011/23',
        icon: <FontAwesomeIcon className="categoryIcon" icon={faLaptop} />,
        category: 'portfolio',
        link: '/works/portfolio'
    },
     {
         img: 'work-lp',
         title: 'PayサービスLp',
         text: '旅行用のpayサービスとしたデモサイトです。',
         data: '2020/12/02',
         category: 'lp',
         icon: <FontAwesomeIcon className="categoryIcon" icon={faLaptop} />,
         link: '/works/lp'
     },
     {
        img: 'work-blog',
        title: '技術用ブログ',
        text: 'コーディング・デザインなど学習をまとめたブログです。',
        data: '2020/12/02',
        category: 'blog',
        icon: <FontAwesomeIcon className="categoryIcon" icon={faLaptop} />,
        link: '/works/blog'
    }
]

const Web = (props) => {
 return(
 <div className="common__contents-center back__white">
     <h3>Web</h3>
     <Cards>
     {Lists.map(list => (
                  <Card key={list.id}  img={list.img} title={list.title} text={list.text} data={list.data} icon={list.icon} category={list.category} link={list.link} />
                 ))}
     </Cards>
 </div>
 )
}

export default Web;