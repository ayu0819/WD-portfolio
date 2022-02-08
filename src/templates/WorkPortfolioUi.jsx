import React from 'react';
import {Top,OverView,Page,Pagination} from '../components/Work';
import { faPencilRuler,faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';
import {ContentsItem} from '../components/Work';
import {Main} from '../components/Common';

const Items = styled.div`
margin: 0.5em 0.5em 0 0.5em;
display: flex;
justify-content: center;
flex-wrap        : wrap;
align-items: center;
`;

const Contents = styled.div`
 padding: 3em 0;
display: flex;
justify-content: center;
flex-wrap        : wrap;
align-items: center;
`;

const Content = styled.div`
`;

const Lists1 = [
    {
         icon: <FontAwesomeIcon className="categoryIcon" icon={faPencilRuler} />,
         link: '',
         pointer: ''
     },
     {
        icon: <FontAwesomeIcon className="categoryIcon" icon={faPencilRuler} />,
        link: '',
        pointer: ''
    },
    {
        icon: <FontAwesomeIcon className="categoryIcon" icon={faPencilRuler} />,
        link: '',
        pointer: ''
    }
]

const Lists2 = [
    {
         icon: <FontAwesomeIcon className="categoryIcon" icon={faPencilRuler} />,
         link: '',
         pointer: ''
     },
     {
        icon: <FontAwesomeIcon className="categoryIcon" icon={faPencilRuler} />,
        link: '',
        pointer: ''
    },
    {
        icon: <FontAwesomeIcon className="categoryIcon" icon={faPencilRuler} />,
        link: '',
        pointer: ''
    }
]

const Lists3 = [
    {
         icon: <FontAwesomeIcon className="categoryIcon" icon={faPencilRuler} />,
         link: '/',
         pointer: 'icon-pointer'
     },
     {
        icon: <FontAwesomeIcon className="categoryIcon" icon={faPencilRuler} />,
        link: '/',
        pointer: 'icon-pointer'
    },
    {
        icon: <FontAwesomeIcon className="categoryIcon" icon={faPencilRuler} />,
        link: '/',
        pointer: 'icon-pointer'
    }
]

const WorkPortfolioUi = () => {

 return(
     <>
     <Main title={'Portfolio UI'} />
<div className="common__center">
    <div className="common__size">
    <Top image={'work-portfolio'} />

  <Contents>
    {/* contents */}
    <Content>
    <h3>coding</h3>
    <Items>
{Lists1.map(list => (
                  <ContentsItem key={list.id} text={list.text} icon={list.icon}  />
                 ))}
     </Items>
     </Content>
     {/* contents */}

    {/* contents */}
    <Content>
    <h3>develop</h3>
    <Items>
{Lists2.map(list => (
                  <ContentsItem key={list.id} text={list.text} icon={list.icon}  />
                 ))}
     </Items>
     </Content>
     {/* contents */}

    {/* contents */}
    <Content>
    <h3>view</h3>
    <Items>
{Lists3.map(list => (
                  <ContentsItem key={list.id} text={list.text} icon={list.icon} pointer={list.pointer} link={list.link} />
                 ))}
     </Items>
     </Content>
     {/* contents */}

  </Contents>

    <OverView text={'text'} />
    <Page />
    <Pagination linkLeft={'/'} linkRight={'/'}   />
 </div>
 </div>
 </>

 )
}

export default WorkPortfolioUi;