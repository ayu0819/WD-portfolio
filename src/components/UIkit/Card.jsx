import React from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {push} from 'connected-react-router';


const CardItem = styled.div`
transition: all ease-out .3s;
  cursor: pointer;
   background-color: #fff;
   width:100%;
   max-width:18em;
   border-radius:0.5em;
   box-shadow: 0px 3px 15px rgb(0 0 0 / 20%);
   margin: 0.5em;
   :hover{
    transition: all ease-out .3s;
    background-color: #f6f6f6;

    }
`;

const CardImage = styled.div`
    border-radius:0.5em 0.5em 0 0;
    width: 100%;
    height: 12em;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    margin: 0 auto;
`;

const CardText = styled.div`
text-align:center;
h4{
    padding: 1em 0 0.5em 0;
    font-weight:bold;
    font-size: 1em;
}
p {
    text-align: left;
    margin: 0 auto;
    display: block;
    font-size: 0.85em;
}
`;
const CardDate = styled.div`
p{
    text-align:left;
    font-size: 0.8em;
}
`;
const CardCategory = styled.div`
display:flex;
align-items: center;
p{
    margin-left: 0.5em;
    text-align:left;

}
`;
const Cards = styled.div`
padding: 1em;
`;

const Card = (props) => {
    const dispatch = useDispatch();
 return(
<CardItem onClick={() => dispatch(push(props.link))}>
<CardImage className={props.img} />
<Cards>
<CardText>
<h4>{props.title}</h4>
<p>{props.text}</p>
</CardText>
<CardDate>
    <p><small>{props.data}</small></p>
</CardDate>
<CardCategory>
    <i>{props.icon}</i>
<p><small>{props.category}</small></p>
</CardCategory>
</Cards>
</CardItem>
 )
}

export default Card;