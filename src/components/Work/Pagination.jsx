import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {push} from 'connected-react-router';

const Items = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: center;
    padding: 2em 0;
`;

const Item = styled.p`
    display: flex;
    align-items: center;
    margin: 0 1.5em;
    cursor: pointer;
`;

const PageLeft = styled.div`
 display: block;
`;

const PageRight = styled.div`
  display: block;
`;

const Pagination = (props) => {
    const dispatch = useDispatch();

 return(
   <Items>
   <PageLeft className={props.displayLeft}>
   <Item onClick={() => dispatch(push(props.linkLeft))}><FontAwesomeIcon className="icon-page" icon={faAngleLeft} />Pre</Item>
   </PageLeft>
   <PageRight className={props.displayRight}>
   <Item onClick={() => dispatch(push(props.linkRight))}>Next<FontAwesomeIcon className="icon-page" icon={faAngleRight}/></Item>
   </PageRight>
   </Items>
 )
}

export default Pagination;