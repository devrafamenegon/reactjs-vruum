import styled, {css} from "styled-components";
import { FaTimes } from 'react-icons/fa';


interface NavbarMobileContainerProps {
  isOpen: boolean;
}

interface NavLiProps {
  isActive: boolean;
  color: string;
}

const NavbarMobileContainer = styled.div<NavbarMobileContainerProps>`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 999;
  
  display: flex;

  align-items: center;
  justify-content: center;
  text-align: center;

  background: var(--background);
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

const NavbarMobileLinks = styled.ul`
  color: var(--white);
`;

const NavbarMobileLi = styled.li<NavLiProps>`
  list-style: none;
  margin-bottom: 20%;

  font-size: 26px;

  transition: 0.5s all;

  :hover {
    color: ${(props: NavLiProps) => (props.color)};
  }

  ${({ isActive }) => isActive && css`
    text-decoration: underline;
  `}
`;

const NavbarMobileClose = styled.div`
  position: absolute;
  top: 3%;
  right: 9%;

  cursor: pointer;
`;

const CloseIcon = styled(FaTimes)`
  color: var(--white);
`;

export { NavbarMobileContainer, NavbarMobileLinks, NavbarMobileLi, NavbarMobileClose, CloseIcon }