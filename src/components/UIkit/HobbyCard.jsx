import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    background-color: #fff;
    border-radius: 0.5em;
    width:100%;
    max-width:15em;
    text-align: center;
    padding: 1em;
    box-shadow: 0px 3px 15px rgb(0 0 0 / 20%);
    margin: 1em;
`;

const Image = styled.div`
    width: 100%;
    height: 12em;
    /* background-image: url('https://placehold.jp/200x200.png'); */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    margin: 0 auto;
    border-radius: 0.4em;
`;

const TextArea = styled.div`
p{
    padding-top:1.5em;
}
    /* background-image: url('https://placehold.jp/200x200.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%; */
`;

const HobbyCard = (props) => {
 return(
 <Card>
   <Image className={props.img} />
   <TextArea>
       <p>{props.name}</p>
   </TextArea>
 </Card>
 )
}

export default HobbyCard;