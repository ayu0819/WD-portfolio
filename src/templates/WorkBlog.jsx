import React from 'react';
import {Top,OverView,Page,Pagination} from '../components/Work';
import { faLaptop,faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faJsSquare,faGithub,faSass,faHtml5,faGulp,faWordpress } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';
import {ContentsItem,PageItem} from '../components/Work';
import {Main} from '../components/Common';
import top from '../assets/img/work_blog-top.jpg';
import main from '../assets/img/work_blog-main.jpg';
import category from '../assets/img/work_blog-category.jpg';

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
    },
    {
        icon: <FontAwesomeIcon className="icon-brand icon-brand-wordpress" icon={faWordpress} />,
        link: '',
        pointer: ''
    }
]

const Lists2 = [
    {
         icon: <FontAwesomeIcon className="icon-brand icon-brand-pc" icon={faLaptop} />,
         link: 'https://ratio.ym-tane.com/',
         pointer: 'icon-pointer'
     },
     {
        icon: <FontAwesomeIcon className="icon-brand icon-brand-github" icon={faGithub} />,
        link: 'https://github.com/ayu0819/develop-blog.git',
        pointer: 'icon-pointer'
    }
]
const Lists3 = [
    {
         img: top,
         title: 'Top',
         text1: '"トップページ" では、新着順に記事のデータを表示させています。',
         text2: '記事の項目をクリックすると、そのリンクへ移動して記事を読むことができます。',
         text3: 'また、記事の "カテゴリー別" にヘッダーで絞り込むことができます。',
         direction: ''
     },
     {
        img: main,
        title: 'Main Article',
        text1: '"メイン記事" では、記事本文を表示させています。',
        direction: 'work-direction'
    },
    {
        img: category,
        title: 'Category',
        text1: '"カテゴリーの絞り込み" では、記事を "カテゴリー別" に絞りこむことができます。',
        direction: '',
    }
]

const WorkBlog = () => {

 return(
<>
     <Main title={'Develop Blog'} />
<div className="common__center">

    <Top image={'work-blog'} />

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
     text1={'フロントエンドに "HTML5・Scss・Javascript(プレーン)" と 開発環境に "Gulp4" を利用して "WordPress" のテーマを作成しました。'}
    />

    <div className="back__gray">
    <div className="common__size">
    <h2>Page</h2>
    <Contents>
     {Lists3.map(list => (
        <PageItem key={list.id}  img={list.img} title={list.title} text1={list.text1} text2={list.text2} direction={list.direction}  />
       ))}
</Contents>
</div>
</div>

    <Pagination linkLeft={'/works/lp'} linkRight={'/works/churchicon'}   />

 </div>
</>
 )
}

export default WorkBlog;