import React from 'react';
import {Top,OverView,Page,Pagination} from '../components/Work';
import { faLaptop,faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faReact,faCss3Alt,faJsSquare,faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';
import {ContentsItem,PageItem} from '../components/Work';
import {Main} from '../components/Common';
import top from '../assets/img/work_portfolio_top.jpg';
import about from '../assets/img/work_portfolio_about.jpg';
import works from '../assets/img/work_portfolio_works.jpg';
import log from '../assets/img/work_portfolio_log.jpg';
import work from '../assets/img/work_portfolio_work.jpg';
import contact from '../assets/img/work_portfolio_form.jpg';



const Items = styled.div`
margin: 0.5em 0.5em 0 0.5em;
display: flex;
justify-content: center;
flex-wrap        : wrap;
align-items: center;
`;

const Contents = styled.div`
 /* padding: 3em 0; */
display: flex;
justify-content: center;
flex-wrap        : wrap;
align-items: center;
h2,h3 {
    padding: 0;
}
`;

const Content = styled.div`
`;

const Lists1 = [
    {
         icon: <FontAwesomeIcon className="icon-brand icon-brand-react" icon={faReact} />,
         link: '',
         pointer: ''
     },
     {
        icon: <FontAwesomeIcon className="icon-brand con-brand-css" icon-brand-css icon={faCss3Alt} />,
        link: '',
        pointer: ''
    },
    {
        icon: <FontAwesomeIcon className="icon-brand icon-brand-js" icon={faJsSquare} />,
        link: '',
        pointer: ''
    },
    {
        icon: <FontAwesomeIcon className="icon-brand icon-brand-pc" icon={faDatabase} />,
        link: '',
        pointer: ''
    }
]

const Lists2 = [
    {
         icon: <FontAwesomeIcon className="icon-brand icon-brand-pc" icon={faLaptop} />,
         link: 'https://portfolio.ym-tane.com/',
         pointer: 'icon-pointer'
     },
     {
        icon: <FontAwesomeIcon className="icon-brand icon-brand-github" icon={faGithub} />,
        link: 'https://github.com/ayu0819/react-portfolio',
        pointer: 'icon-pointer'
    }
]

const Lists3 = [
    {
         img: top,
         title: 'Top',
         text1: '"トップページ" では "更新履歴・コンテンツ紹介・SNS" らのコンポネートを "Reactのイテレート" らを使用して表示させています。',
         text2: 'また、モバイル時には "ヘッダー" が "アプリバー" へ変化し "モバイルファースト" にできる様作成をしています。',
         direction: ''
     },
     {
        img: contact,
        title: 'Contact',
        text1: '"コンタクト" では "Firebase" を使用して、メッセージを送信することができます。',
        direction: 'work-direction'
    },
     {
        img: about,
        title: 'About',
        text1: '"アバウトページ" では "プロフィール・スキル" のコンポネートを表示させています。',
        direction: ''
    },
    {
        img: works,
        title: 'Works',
        text1: '"ワークスページ" では "Reactのイテレート" を利用してコンテンツを並べて表示させています。',
        direction: 'work-direction'
    },
    {
        img: work,
        title: 'Work',
        text1: '"ワークページ" では 作品紹介 をしています。',
        direction: ''
    },
    {
        img: log,
        title: 'Charge log',
        text1: '"更新履歴" では "トップページ" よりもより詳細な "履歴" を確認することができます。',
        direction: 'work-direction'
    }
]

const WorkPortfolio = () => {

 return(
     <>
     <Main title={'Portfolio'} />
<div className="common__center">
    <Top image={'work-portfolio'} />

    <div className="back__gray">
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

    <Content>
    <h3>view</h3>
    <Items>
{Lists2.map(list => (
                  <ContentsItem key={list.id} text={list.text} icon={list.icon} pointer={list.pointer} link={list.link} />
                 ))}
     </Items>
     </Content>
     {/* contents */}

  </Contents>
  </div>
  </div>

    <OverView text1={'私のポートフォリオサイトです。フロントエンドに "React＋Redux" を使用、 バックエンドに "Firebase" を利用して "contact" のフォームを作成しています。'} />

    <div className="back__gray">
    <div className="common__size">
    <h2>Page</h2>
    <Contents>
     {Lists3.map(list => (
        <PageItem key={list.id}  img={list.img} title={list.title} direction={list.direction} text1={list.text1} text2={list.text2}  />
       ))}
</Contents>
</div>
  </div>

    <Pagination linkLeft={'/works/ec'} linkRight={'/works/lp'} displayLeft={''} displayRight={''}  />
 </div>
</>
 )
}

export default WorkPortfolio;