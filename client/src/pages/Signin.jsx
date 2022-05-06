import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useState } from "react";

const SignInContainer = styled.div`
  ${tw`
      h-screen
  `}
`;

const SignInFormContainer = styled.div`
  ${tw`
    
    w-3/5
    flex
    flex-col
    
  `}
`;

const FormContainer = styled.form`
  ${tw`
    flex
    flex-col
  `}
`;
const Label = styled.label`
  ${tw`
  
  `}
`;

const Input = styled.input`
  ${tw`
    border-2
  `}
`;

const Button = styled.button`
  ${tw`

  `}
`;

const initialState = {
  email: "",
  password: "",
};

const Signin = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { email, password } = formValue;

  const onChangeHandler = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  console.log(formValue);
  return (
    <SignInContainer>
      Signin
      <SignInFormContainer>
        Form
        <FormContainer>
          <Label>Email:</Label>
          <Input
            placeholder="example@yahoo.com"
            type="email"
            name="email"
            value={email}
            onChange={onChangeHandler}
          />
          <Label>Pssword:</Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={onChangeHandler}
          />
          <Button type="submit">Sign In</Button>
        </FormContainer>
      </SignInFormContainer>
    </SignInContainer>
  );
};

export default Signin;
