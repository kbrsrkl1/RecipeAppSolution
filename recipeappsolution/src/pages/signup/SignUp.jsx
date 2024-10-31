import React from 'react';
import { LoginContainer, FormContainer, StyledImg, StyledFormsing, StyledInput, StyledButton, Header, StyledForm } from "../../pages/signup/SignUp.style.jsx";
import meal from "../../assets/meal.svg"
import { useNavigate } from 'react-router-dom';


const SingUp = () => {
  
    const navigate = useNavigate();
    const handleFormsing = (s) => {
      s.preventDefault();
      navigate("/login")
    }



  return (
    <LoginContainer>
        <FormContainer>
            <StyledImg  src={meal}/>
            <Header>
              {"<CW/>"} Recipe
            </Header>
            <StyledFormsing onSubmit={handleFormsing}>
              <StyledInput placeholder= "name"/>
              <StyledInput placeholder= "surname"/>
              <StyledInput placeholder= "username"/>
              <StyledInput placeholder= "email"/>
              <StyledInput placeholder= "password" type="password"/>
              <StyledInput placeholder= "repeat password" type="password"/>
              <StyledButton>Sign Up</StyledButton>
            </StyledFormsing>
        </FormContainer>
    </LoginContainer>
  );
};

export default SingUp;