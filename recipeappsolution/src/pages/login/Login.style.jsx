import styled from 'styled-components';
import Flex from '../../companents/globalStyles/Flex.style';


export const LoginContainer= styled(Flex)`
                height: 100vh;
                background-image:url('https://picsum.photos/1600/900') ;
                background-repeat:no-repeat;
                background-size: cover;
                background-position: center;
`;

export const FormContainer= styled(Flex)`
  width: 35rem;
  height: 35rem;
  max-width: 50rem;
  background: rgba(0, 173, 181, 0.4);
  border-radius: 50%;
  border: 2px solid #e1f1dd;
  padding: 2rem;
  flex-direction: column;
`;

export const Header = styled.h1`
            color: white;
            font-size: 3rem;
`;

export const StyledInput = styled.input`

            height: 3rem;
            font-size: 2rem;
            width: 16rem;
            border-radius: 5px;
            background-color: rgba(0, 0, 0, 0.6 );
            border: none;
            color: white;
            margin: 1rem;
            text-indent: 1rem;
`;


export const StyledForm = styled.form`

            display: flex;
            flex-direction: column;
`;

export const StyledButton = styled.button`

            font-size: 2rem;
            background: rgba(0, 0, 0, 0.6);
            border-radius: 5px;
            color: white;
            border: none;
            margin: 1rem;
            cursor: pointer;
            &:hover {
                opacity: 0.8;
            }
`;

export const StyledImg = styled.img`

            width: 180px;
            margin: 1rem;

`;