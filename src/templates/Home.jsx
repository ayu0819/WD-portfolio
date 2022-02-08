import React from 'react';
import {useSelector} from "react-redux";
import { getUserId,getUsername } from '../reducks/users/selectors';
import {ChargeLog,AboutArticle,AboutWork} from '../components/Home';
import {Main} from '../components/Common';

const Home = () => {
    const selector = useSelector(state => state);
    const uid = getUserId(selector)
    const username = getUsername(selector)

 return(
   <>
   <Main title={'Ayu Portfolio'} />
   {/* <div className="common__color"> */}
    <div className="common__center">
      {/* <h2>Home</h2> */}
      <ChargeLog />
      <AboutWork />
      <AboutArticle />
      {/* <p>ここはホームです。</p>
      <p>id:{uid}</p>
      <p>ユーザー名前:{username}</p> */}
     </div>
     {/* </div> */}
     </>
 )
}

export default Home;