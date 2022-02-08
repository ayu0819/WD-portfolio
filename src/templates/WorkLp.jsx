import React from 'react';
import {Top,OverView,Page,Pagination} from '../components/Work';
import { faLaptop,faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faReact,faCss3Alt,faJsSquare,faGithub,faSass,faHtml5,faGulp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';
import {ContentsItem,PageItem} from '../components/Work';
import {Main} from '../components/Common';
import top from '../assets/img/travellers_Pay_home.jpg';
import about from '../assets/img/travellers_Pay_company.jpg';
import employ from '../assets/img/travellers_Pay_employ.jpg';


const Items = styled.div`
margin: 0.5em 0.5em 0 0.5em;
display: flex;
justify-content: center;
flex-wrap        : wrap;
align-items: center;
`;

const Contents = styled.div`
 padding: 3em 0;
display: flex;
justify-content: center;
flex-wrap        : wrap;
align-items: center;
`;

const Content = styled.div`
`;

const Lists1 = [
    {
         icon: <FontAwesomeIcon className="icon-brand icon-brand-html" icon={faHtml5} />,
         link: '',
         pointer: ''
     },
     {
        icon: <FontAwesomeIcon className="icon-brand icon-brand-sass" icon-brand-css icon={faSass} />,
        link: '',
        pointer: ''
    },
    {
        icon: <FontAwesomeIcon className="icon-brand icon-brand-js" icon={faJsSquare} />,
        link: '',
        pointer: ''
    },
    {
        icon: <FontAwesomeIcon className="icon-brand icon-brand-gulp" icon={faGulp} />,
        link: '',
        pointer: ''
    }
]

const Lists2 = [
    {
         icon: <FontAwesomeIcon className="icon-brand icon-brand-pc" icon={faLaptop} />,
         link: 'http://travelers-pay.hudehisa.com/',
         pointer: 'icon-pointer'
     },
     {
        icon: <FontAwesomeIcon className="icon-brand icon-brand-github" icon={faGithub} />,
        link: 'https://github.com/ayu0819/travelersPay',
        pointer: 'icon-pointer'
    }
]
const Lists3 = [
    {
         img: top,
         title: 'Top',
         text1: '"トップページ" では、サービスの紹介を "画像・テキスト" を利用して記載しています。',
         text2: 'ページ下部の "更新履歴" では、表示を "3項目" に分けて確認することができます。',
         direction: ''
     },
     {
        img: about,
        title: 'About・employ',
        text1: '"会社概要・採用情報" では、会社の詳細・採用情報を記載しています。',
        direction: 'work-direction'
    }
]

const WorkLp = () => {

 return(
     <>
     <Main title={'Lp Site'} />
<div className="common__center">
    <Top image={'work-lp'} />

    <div className="back__white">
    <div className="common__size">
  <Contents>
    {/* contents */}
    <Content>
    <h3>develop</h3>
    <Items>
{Lists1.map(list => (
                  <ContentsItem key={list.id} text={list.text} icon={list.icon}  />
                 ))}
     </Items>
     </Content>
     {/* contents */}

    {/* contents */}
    <Content>
    <h3>view</h3>
    <Items>
{Lists2.map(list => (
                  <ContentsItem key={list.id} text={list.text} icon={list.icon} link={list.link}  />
                 ))}
     </Items>
     </Content>
     {/* contents */}
  </Contents>
  </div>
  </div>

    <OverView 
     text1={'フロントエンドに "HTML5・Scss・Javascript(プレーン)" と 開発環境に "Gulp4" を使用して作成したLPページです。'}
    />

    <div className="back__white">
    <div className="common__size">
    <h2>Page</h2>
    <Contents>
     {Lists3.map(list => (
        <PageItem key={list.id}  img={list.img} title={list.title} text1={list.text1} text2={list.text2} direction={list.direction}  />
       ))}
</Contents>
</div>
       </div>

    <Pagination linkLeft={'/works/portfolio'} linkRight={'/works/blog'}   />
 </div>
</>
 )
}

export default WorkLp;