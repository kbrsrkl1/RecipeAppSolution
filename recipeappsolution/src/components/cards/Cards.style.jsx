import styled from 'styled-components';
import Flex from '../../components/globalStyles/Flex.style';

export const MainContainer = styled(Flex)`
  flex-direction: row;
`;
export const Card = styled(Flex)`
  flex-direction: column;
  height: 21rem;
  width: 21rem;
  background: ${({ theme }) => theme.colors.navbarBgColor};
  padding: 0.5rem;
  border-radius: 3px;
  margin: 0.7rem;
  box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: none;
    transition: all 0.3s ease-in;
  }
`;

export const Image = styled.img`
  height: 10rem;
  border-radius: 10px;
  box-shadow: 1px 1px 7px 1px #4c4c4c;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.mainColor};
  padding: 0.8rem;
  font-size: 1rem;
  outline: none;
  border: none;
  margin: 0.9rem;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
    background-color: #25c0c5;
  }
`;

export const Header = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 0.6rem;
`;
