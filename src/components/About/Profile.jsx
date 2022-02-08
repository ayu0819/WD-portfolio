import React from 'react';
import styled from 'styled-components';
import image from '../../assets/img/my-image.jpg';

const Image = styled.div`
    /* margin-top: 3em; */
    width: 12em;
    height: 12em;
    border-radius: 50%;
    background: url(${image}) center center / cover no-repeat;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
`;

const TextArea = styled.div`
margin-left: 2.5em;
p{
    text-align: left;
}
    h4{
        color: #0084be;
        font-weight: bold;
        font-size: 25px;
}
    
`;

const Contents = styled.div`
display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items:center;
`;

const Profile = (props) => {
 return(
<div className="back__white">
    <div className="common__size">
    <Contents>
    <Image />
   <TextArea>
       <h4>Tateishi Ayu</h4>
       <p>Live in Tokyo<br />Born in Nagasaki</p>
   </TextArea>
    </Contents>
</div>
</div>
 )
}

export default Profile;


// const hobbyCardList = [
    //     {
    //       name: 'Smple',
    //       image: 'https://school.dhw.co.jp/images/course/cgvfx/top/ootake_01.jpg',
    //       text: 'サンプルです1'
    //     },
    //     {
    //       name: 'Smple',
    //       image: 'https://school.dhw.co.jp/images/course/cgvfx/top/ootake_01.jpg',
    //       text: 'サンプルです2'
    //     },
    //     {
    //       name: 'Smple',
    //       image: 'https://school.dhw.co.jp/images/course/cgvfx/top/ootake_01.jpg',
    //       text: 'サンプルです3'
    //     }
    //   ]

{/* {hobbyCardList.map((hobbyCardItem,hobbyCard)=>{
            return(
              <Cards
              key={hobbyCard}
              image = {hobbyCardItem.image}
              name = {hobbyCardItem.name}
              text = {hobbyCardItem.text}
              />
            )
            })} */}