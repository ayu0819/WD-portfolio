import React,{useCallback,useState} from 'react';
import {useDispatch} from "react-redux";
// import {push} from "connected-react-router"
// import { signInAction } from '../reducks/users/actions';
// import {signIn} from "../reducks/users/operations"
import {SignInput,PrimaryButton} from '../components/UIkit';
import {push} from 'connected-react-router';

import {signUp} from '../reducks/users/operations';

const SignUp = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState(""),
          [username, setUsername] = useState(""),
          [password, setPassword] = useState(""),
          [confirmPassword, setConfirmPassword] = useState("");

    const inputEmail = useCallback((event) => {
        setEmail(event.target.value)
    },[setEmail]);
    const inputUsername = useCallback((event) => {
        setUsername(event.target.value)
    },[setUsername]);
    const inputPassword = useCallback((event) => {
        setPassword(event.target.value)
    },[setPassword]);
    const inputConfirmPassword = useCallback((event) => {
        setConfirmPassword(event.target.value)
    },[setConfirmPassword]);
    

    // const selector = useSelector((state) => state);

    // console.log(selector.router)

 return(
     <div className="common__center back__gray">
      <h2>サインアップ</h2>
     <SignInput
      placeholder={"メールアドレス"}
      label={"メールアドレス"}
      type={"email"}
      name={"email"}
      id={"email"}
      className={"email"}
      autocomplete={"off"}
      value={email}
      onChange={inputEmail}
     />

<SignInput
      placeholder={"ユーザー名"}
      label={"ユーザー名"}
      type={"text"}
      name={"text"}
      id={"text"}
      className={"name"}
      autocomplete={"off"}
      value={username}
      onChange={inputUsername}
     />

<SignInput
      placeholder={"パスワード"}
      label={"パスワード"}
      type={"password"}
      name={"password"}
      id={"password"}
      className={"password"}
      autocomplete={"off"}
      value={password}
      onChange={inputPassword}
     />

<SignInput
      placeholder={"パスワード確認"}
      label={"パスワード"}
      type={"password"}
      name={"password"}
      id={"password"}
      className={"password"}
      autocomplete={"off"}
      value={confirmPassword}
      onChange={inputConfirmPassword}
     />

     <PrimaryButton 
     label={"Sign In"}
     onClick={() => dispatch(signUp(username, email, password, confirmPassword))}
     />

<p onClick={() => dispatch(push('/signin'))}>アカウントをお持ちの方はこちら</p>
<p onClick={() => dispatch(push('/signin/reset'))}>パスワードをお忘れの方はこちら</p>
      {/* <button onClick={() => dispatch(signUp(username, email, password, passwordConfirm))}>
          サインインする
      </button> */}
     </div>
 )
}

export default SignUp;