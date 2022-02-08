import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import { signOut } from '../reducks/users/operations';
import { getUserId,getUsername } from '../reducks/users/selectors';

const Admin = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const uid = getUserId(selector)
    const username = getUsername(selector)

 return(
     <div>
      <h2>Admin</h2>
      <p>ここはホームです。</p>
      <p>id:{uid}</p>
      <p>ユーザー名前:{username}</p>
      <button onClick={() => dispatch(signOut())}>Sign out</button>
     </div>

 )
}

export default Admin;