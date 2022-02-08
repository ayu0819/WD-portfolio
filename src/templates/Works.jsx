import React from 'react';
import {Web,Design} from '../components/Works';
import {Main} from '../components/Common';

const Works = () => {
   

 return(
   <>
   <Main title={'Works'} />
<div className="common__center">
      <h2>Works</h2>
      <Web />
      <Design />
     </div>
</>
 )
}

export default Works;