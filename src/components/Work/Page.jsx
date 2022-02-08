import React from 'react';
import {PageItem} from '../Work';
import image from '../../assets/img/cart-img.jpg';
import styled from 'styled-components';

const Contents = styled.div`
 padding: 3em 0;
`;

const Lists = [
    {
         img: image,
         title: 'ゲームECサイト',
         text: 'Reduxを使用して作成したデモECサイトです。',
         direction: ''
     },
     {
        img: image,
        title: 'ゲームECサイト',
        text: 'Reduxを使用して作成したデモECサイトです。',
        direction: 'work-direction'
    },
    {
        img: image,
        title: 'ゲームECサイト',
        text: 'Reduxを使用して作成したデモECサイトです。',
        direction: '',
    }
]

const Page = () => {

 return(
    <div className="back__white">
    <div className="common__size">
<Contents>
<h2>Page</h2>
     {Lists.map(list => (
        <PageItem key={list.id}  img={list.img} title={list.title} text={list.text} direction={list.direction}  />
       ))}
</Contents>
</div>
</div>
 )
}

export default Page;