import React from 'react'
import { LoginContainer , FormContainer, StyledImg, StyledForm, StyledButton, StyledInput, Header} from './Login.style'
import meal from "../../assets/meal.svg";


const Login = () => {
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal}/>
        <Header>
          {"<CW/>"}Recipe
        </Header>
        <StyledForm>
          <StyledInput placeholder ="Enter username" type="user"/>
          <StyledInput placeholder="Enter username" type="password"/>
          <StyledButton>Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login
