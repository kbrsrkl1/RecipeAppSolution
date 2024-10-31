import React from 'react';
import { LoginContainer, FormContainer, StyledImg, StyledForm, StyledInput, StyledButton, Header, StyledForms, StyledButtons } from "./Login.style";
import meal from "../../assets/meal.svg"
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const userInfo = {
    username : "admin"
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(userInfo))
    navigate("/")
  }

  const handleForms = (f) => {
    f.preventDefault();
    navigate("/signup")
  }


  return (
    <LoginContainer>
        <FormContainer>
            <StyledImg  src={meal}/>
            <Header>
              {"<CW/>"} Recipe
            </Header>
            <StyledForm  onSubmit={handleSubmit}>
              <StyledInput  placeholder = "Enter username" type="text"/>
              <StyledInput  placeholder = "Enter password" type="password"/>
              <StyledButton>Login</StyledButton>
            </StyledForm>

            <StyledForms onSubmit={handleForms}>
            <StyledButtons>Sign Up</StyledButtons>
            </StyledForms>

        </FormContainer>
    </LoginContainer>
  );
};

export default Login;