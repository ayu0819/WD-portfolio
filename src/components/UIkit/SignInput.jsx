import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    color: #8a8a8a;
    display: block;
    width: 90%;
    height: 44px;
    padding: 5px 5%;
    border: 1px solid #ccc;
    border-radius: 27px;
    background-clip: padding-box;
    background-color: #fff;
    font-family: 'HelveticaNeue','Arial', sans-serif;
    font-size: 105%;
    letter-spacing: .8px;
`;

const SignInput = (props) => {
 return(
  <Input
  placeholder={props.placeholder}
  label={props.label}
  type={props.type}
  name={props.name}
  id={props.id}
  className={props.class}
  required={props.required}
  autocomplete={props.complete}
  onChange={props.onChange}
  value={props.value}
  />
 )
}

export default SignInput;















// import React from 'react';
// import TextField from "@material-ui/core/TextField";

// const TextInput = (props) => {
//  return(

//      <TextField 
//        fullWidth={props.fullWidth}
//        label={props.label}
//        margin={props.margin}
//        multiline={props.multiline}
//        required={props.required}
//        rows={props.rows}
//        value={props.value}
//        type={props.type}
//        onChange={props.onChange}
//      />

//  )
// }

// export default TextInput;