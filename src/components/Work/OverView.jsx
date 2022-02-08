import React from 'react';
import styled from 'styled-components';

const Contents = styled.div`
 padding: 3em 0;
 p {
     text-align: left;
    }
`;

const OverView = (props) => {

 return(
    <div className="back__white">
    <div className="common__size">
<Contents>
 <h2>Over View</h2>
 <p>{props.account}</p>
 <p>{props.text1}<br />{props.text2}<br />{props.text3}</p>
 </Contents>
 </div>
 </div>
 )
}

export default OverView;