import React from 'react';
import styled from 'styled-components';
import image_1 from '../../assets/img/work_design_icon-1.png';
import image_2 from '../../assets/img/work_design_icon-2.png';
import image_3 from '../../assets/img/work_design_icon-3.png';
import image_4 from '../../assets/img/work_design_icon-4.png';
import image_5 from '../../assets/img/work_design_icon-5.png';

const Contents = styled.div`
 padding: 3em 0;
display: flex;
justify-content: center;
flex-wrap        : wrap;
align-items: center;
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

const FlexItem = () => {

 return(
<Contents>
{Lists.map(list => (
                 <img src={list.img} alt={list.alt} />
                 ))}
  </Contents>
 )
}

export default FlexItem;