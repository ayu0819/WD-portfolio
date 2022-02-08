import React from 'react';
import {Card,Button} from '../UIkit';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";

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
      }
 ]

const AboutWork = (props) => {
 return(
<div className="back__gray">
    <div className="common__size">
     <h3>AboutWork</h3>

<Cards>
     {Lists.map(list => (
                  <Card key={list.id}  img={list.img} title={list.title} text={list.text} data={list.data} icon={list.icon} category={list.category} link={list.link}  />
                 ))}
     </Cards>



     <Button text={'more view'} link={'/works'} />
     </div>
</div>

 )
}

export default AboutWork;