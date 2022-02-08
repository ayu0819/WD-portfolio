import React,{useCallback,useState} from 'react';
import {useDispatch} from "react-redux";
import {ResetPassword} from "../reducks/users/operations"
import {SignInput,PrimaryButton} from '../components/UIkit';
import {push} from 'connected-react-router';

const Reset = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");

    const inputEmail = useCallback((event) => {
        setEmail(event.target.value)
    },[setEmail]);

 return(
     <div className="common__center back__gray">
      <h2>パスワードリセット</h2>
     <SignInput
      label={"メールアドレス"}
      placeholder={"メールアドレス"}
      type={"email"}
      required={true}
      name={"email"}
      id={"email"}
      className={"email"}
      autocomplete={"off"}
      value={email}
      onChange={inputEmail}
     />

     <PrimaryButton 
     label={"Sign In"}
     onClick={() => dispatch(ResetPassword(email))}
     />

<p onClick={() => dispatch(push('/signin'))}>アカウントをお持ちの方はこちら</p>
<p onClick={() => dispatch(push('/signup'))}>アカウントをお持ちでない方はこちら</p>
     </div>
 )
}

export default Reset;