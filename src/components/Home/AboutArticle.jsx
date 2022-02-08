import React from 'react';
import {CardExternal} from '../UIkit';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilRuler,faLaptop } from "@fortawesome/free-solid-svg-icons";


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
        img: 'article-404',
        title: 'Reactで404エラーページ',
        text: 'Reactで404エラーページ を作ろうを作成します‥',
        data: '2021/02/28',
        category: 'development',
        icon: <FontAwesomeIcon className="categoryIcon" icon={faLaptop} />,
        link: 'https://ratio.ym-tane.com/new/create_react-404page/'
    },
     {
         img: 'article-reactSass',
         title: 'Reactでの環境構築とSass導入',
         text: 'Reactでの環境構築とSass導入 の記事を投稿します‥',
         data: '2021/02/07',
         icon: <FontAwesomeIcon className="categoryIcon" icon={faLaptop} />,
         category: 'development',
         link: 'https://ratio.ym-tane.com/development/environment-react_sass/'
     },
      {
          img: 'article-gulp',
          title: 'Gulp4の環境開発',
          text: 'Gulp4の環境開発を行います。開発に役立ててください‥',
          data: '2021/01/31',
          category: 'development',
          icon: <FontAwesomeIcon className="categoryIcon" icon={faLaptop} />,
          link: 'https://ratio.ym-tane.com/development/development-gulp4/'
      }
 ]

const AboutArticle = (props) => {
 return(
<div className="back__white">
    <div className="common__size">
    <h3>AboutArticle</h3>

<Cards>
     {Lists.map(list => (
                  <CardExternal key={list.id}  img={list.img} title={list.title} text={list.text} data={list.data} icon={list.icon} category={list.category} link={list.link} />
                 ))}
     </Cards>
    </div>
</div>
 )
}

export default AboutArticle;