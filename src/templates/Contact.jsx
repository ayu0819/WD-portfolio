import React,{useState,useCallback,useEffect} from 'react';
import {InputArea,TextArea,SelectArea,PrimaryButton} from '../components//UIkit';
import {Main} from '../components/Common';
import {saveContact} from '../reducks/contacts/operations';
import {useDispatch} from "react-redux";

const Contact = () => {

  const dispatch = useDispatch();

    const [type, setType] = useState(""),
    [name, setName] = useState(""),
    [subject, setSubject] = useState(""),
    [email, setEmail] = useState(""),
    [text, setText] = useState("");

    const types =  [
        {id: "選択してください", name: '選択してください'},
        {id: "お仕事について", name: 'お仕事について'},
        {id: "お問い合わせについて", name: 'お問い合わせについて'},
        {id: "その他", name: 'その他'}
    ];

    const inputEmail = useCallback((event) => {
        setEmail(event.target.value)
      },[setEmail]);
      
      const inputName = useCallback((event) => {
        setName(event.target.value)
      },[setName]);
      
      const inputSubject = useCallback((event) => {
        setSubject(event.target.value)
      },[setSubject]);
      
      const inputText = useCallback((event) => {
        setText(event.target.value)
      },[setText]);
         
   

 return(
   <>
  <Main title={'Contact'} />
    <div className="common__center">
    <div className="back__white">
    <div className="common__size">

      <h2>Contact</h2>

      <SelectArea 
     name={"type"}
     id={"type"}
     label={"問い合わせ種類"}
     options={types}
     select={setType}
     value={type}
     />

      <InputArea
      label={"名前"}
      placeholder={"入力してください"}
      type={"text"}
      required={true}
      name={"name"}
      id={"name"}
      className={"name"}
      autocomplete={"off"}
      value={name}
      onChange={inputName}
     />  

<InputArea
      label={"件名"}
      placeholder={"入力してください"}
      type={"text"}
      required={true}
      name={"subject"}
      id={"subject"}
      className={"subject"}
      autocomplete={"off"}
      value={subject}
      onChange={inputSubject}
     />  

<InputArea
      label={"メールアドレス"}
      placeholder={"入力してください"}
      type={"email"}
      required={true}
      name={"email"}
      id={"email"}
      className={"email"}
      autocomplete={"off"}
      value={email}
      onChange={inputEmail}
     />  

<TextArea onChange={inputText} label={'本文'} value={text} />

<PrimaryButton 
      style={'primary__red'} onClick={() => dispatch(saveContact({
        // id: id,
        type: type,
        email: email,
        subject: subject,
        text: text,
        name: name,
        email: email
      }))} label={'send message'}
     />


</div>
</div>
</div>
</>
 )
}

export default Contact;