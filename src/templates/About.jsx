import React from 'react';
import {Profile,Hobby,Skill,Career} from '../components/About';
import {Main} from '../components/Common';

const About = (props) => {
   
 return(
<>
<Main title={'About'} />
<div className="common__center">
      <h2>About</h2>
      <Profile />
      <Hobby />
      <Skill />
      <Career />
     </div>
</>

 )
}

export default About;
