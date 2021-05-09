import styled from "styled-components";
import { FaTimes } from 'react-icons/fa';


interface NavbarMobileContainerProps {
  isOpen: boolean;
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

  li {
    list-style: none;
    margin-bottom: 20%;
  }
`;

const NavbarMobileClose = styled.div`
  position: absolute;
  top: 5%;
  right: 10%;

  cursor: pointer;
`;

const CloseIcon = styled(FaTimes)`
  color: var(--white);
`;

export { NavbarMobileContainer, NavbarMobileLinks, NavbarMobileClose, CloseIcon }