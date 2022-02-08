import React from 'react';
import {Tools,Qualification,Langlege} from './';





const Skill = (props) => {
 return(
<div className="back__white">
    <div className="common__size">
     <h3>Skill</h3>
     {/* <Langlege /> */}


                   <Langlege />


     <Tools />
     <Qualification />
</div>
 </div>
 )
}

export default Skill;