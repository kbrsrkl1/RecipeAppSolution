import styled from "styled-components";
import Flex from "../globalStyles/Flex.style"
import {Link} from "react-router-dom"
import theme from "../../components/globalStyles/theme"


export const Nav = styled(Flex).withConfig({
    shouldForwardProp: (prop) => !['justify'].includes(prop),
  })`
    padding: 1rem 1.5rem;
    background-color: ${({ theme }) => theme.colors.navbarBgColor};
  `;

export const Brand=styled(Link)`
        color:${({theme}) => theme.colors.logoColor};
        text-decoration: none;
        font-weight: 800;
        font-size: 2rem;
            span{
                font-weight: 400;
                color: ${({theme}) => theme.colors.mainColor};
            }
`;

export const Menu = styled(Flex).withConfig({
    shouldForwardProp: (prop) => !['isOpen'].includes(prop),
  })`
    @media (max-width: ${({ theme }) => theme.screens.lg}) {
      flex-direction: column;
      width: 100%;
      max-height: ${({ isOpen }) => (isOpen ? "400px" : "0")};
      overflow: hidden;
    }
  `;

export const MenuLink = styled(Link)`
        text-align: center;
        padding: 1rem 2rem;
        cursor: pointer;
        text-decoration: none;
        color: ${({theme}) => theme.colors.linkColor};
        transition: all 0.3s ease-in;
            &:hover {
                color:  ${({theme}) => theme.colors.mainColor};
                font-weight: bold;
            }
        @media (max-width: ${({ theme}) => theme.screens.lg}) {
            width: 100%;
            border-bottom: 0.1px solid ${({ theme}) => theme.colors.mainColor};
        }
`;

export const Hamburger = styled.div`
        display: none;
        cursor: pointer;
        color: ${({ theme }) => theme.colors.mainColor};


        @media (max-width: ${({ theme }) => theme.screens.lg}){
            display: block;
        }
`;



export default Nav;