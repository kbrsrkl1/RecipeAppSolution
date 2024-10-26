import React from 'react'
import { LoginContainer , FormContainer, StyledImg, StyledForm, StyledButton, StyledInput, Header} from './Login.style'
import { useNavigate } from 'react-router-dom';
import meal from "../../assets/meal.svg";

const Login = () => {
  
  const userInfo = {
    username:"admin"
  }

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user",JSON.stringify(userInfo))
    navigate("-1")
  };



  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal}/>
        <Header>
          {"<CW/>"}Recipe
        </Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput placeholder ="Enter username" type="user"/>
          <StyledInput placeholder="Enter username" type="password"/>
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
