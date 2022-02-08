import React from 'react';
import styled from 'styled-components';

const media = {
    sp: '@media(max-width: 650px)'
}

const Pages = styled.div`
margin: 2.5em 0;
display: flex;
justify-content: center;
flex-wrap        : wrap;
align-items: center;
img {
    border-radius: 0.7em;
}
`;

const TextArea = styled.div`
 padding: 3em;
 width: 25em;
 ${media.sp} {
    padding: 1em;
    width: 100%;
   }
`;

const Image = styled.img`
 width: 25em;
`;

const Title = styled.h2`
/* margin: 1em 0;
display: flex;
justify-content: center;
flex-wrap        : wrap;
align-items: center; */
`;

const Text = styled.p`
 text-align: left;
`;

const PageItem = (props) => {

 return(
<Pages className={props.direction}>
 <Image src={props.img} alt={props.alt} />
<TextArea>
 <Title>{props.title}</Title>
 <Text>{props.text1}</Text>
 <Text>{props.text2}</Text>
 <Text>{props.text3}</Text>
</TextArea>
</Pages>
 )
}

export default PageItem;