import React,{useCallback,useState} from 'react';
import {useDispatch} from "react-redux";
// import { signInAction } from '../reducks/users/actions';
import {signIn} from "../reducks/users/operations"
import {SignInput,PrimaryButton} from '../components/UIkit';
import {push} from 'connected-react-router';

const SignIn = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState(""),
          [password, setPassword] = useState("");

    const inputEmail = useCallback((event) => {
        setEmail(event.target.value)
    },[setEmail]);
    const inputPassword = useCallback((event) => {
        setPassword(event.target.value)
    },[setPassword]);

    // const selector = useSelector((state) => state);

    // console.log(selector.router)

 return(
     <div className="common__center">
      <h2>サインイン</h2>
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

<SignInput
      label={"パスワード"}
      placeholder={"パスワード"}
      type={"password"}
      required={true}
      name={"password"}
      id={"password"}
      className={"password"}
      autocomplete={"off"}
      value={password}
      onChange={inputPassword}
     />

     <PrimaryButton 
     label={"Sign In"}
     onClick={() => dispatch(signIn(email, password))}
     />

     <p onClick={() => dispatch(push('/signout'))}>アカウントをお持ちでない方はこちら</p>
     <p onClick={() => dispatch(push('/signin/reset'))}>パスワードをお忘れの方はこちら</p>

      {/* <button onClick={() => dispatch(signIn(email,password))}>
          サインインする
      </button> */}
     </div>
 )
}

export default SignIn;