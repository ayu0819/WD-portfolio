import React from 'react';
import {Top,OverView,Page,Pagination} from '../components/Work';
import styled from 'styled-components';
import {Main} from '../components/Common';
import image_1 from '../assets/img/work_design_icon-1.png';
import image_2 from '../assets/img/work_design_icon-2.png';
import image_3 from '../assets/img/work_design_icon-3.png';
import image_4 from '../assets/img/work_design_icon-4.png';
import image_5 from '../assets/img/work_design_icon-5.png';

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
img {
    width: 100%;
    max-width:15em;
    padding: 1.5em;
}
h2,h3 {
    padding: 0;
}
`;

const Content = styled.div`
`;

const Lists = [
    {
         img: image_1,
         alt: '旧野首教会'
     },
     {
        img: image_2,
        alt: '江上天主堂'
    },
    {
        img: image_3,
        alt: '頭ヶ島天主堂'
    },
    {
        img: image_4,
        alt: '堂崎天主堂'
    },
    {
        img: image_5,
        alt: '浜脇教会'
    }
]


const ChurchIcon = () => {

 return(
     <>
     <Main title={'Church Icon'} />
<div className="common__center">

    <Top image={'work-app'} />

    <Contents>
  <OverView 
     text1={'"adobe Illustrator" を使用して作成した "教会" のアイコン 5点 です。'}
    />
    </Contents>

<div className="back__gray">
    <div className="common__size">
    <Contents>
{Lists.map(list => (
                 <img src={list.img} alt={list.alt} />
                 ))}
  </Contents>
  </div>
  </div>

    <Pagination linkLeft={'/'} linkRight={'/'} displayLeft={''} displayRight={'workDisplay'}   />

 </div>
 </>

 )
}

export default ChurchIcon;