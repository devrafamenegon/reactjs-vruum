import styled from "styled-components";

interface NavbarContainerProps {
  backgroundColor: string;
}

const NavbarContainer = styled.div<NavbarContainerProps>`
  width: 100%;
  height: 80px;

  background: ${(props: NavbarContainerProps) => props.backgroundColor};

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);

  margin: 0;
  padding: 0;
`;

const NavbarContent = styled.div`
  max-width: 65vw;
  width: 100%;

  justify-content: space-between;

  display: flex;
  flex-direction: row;

  @media (max-width: 1160px) {
    max-width: 80vw;
  }

  @media (max-width: 900px) {
    max-width: 90vw;
  }
`;

const NavbarLogo = styled.div`
  width: 100%;
  flex: 60%;

  img {
    width: 150px;
  }
`;

const NavbarLinks = styled.ul`
  width: 100%;
  flex: 40%;

  align-items: center;

  display: flex;
  flex-direction: row;

  ul {
    width: 100%;
  }

  li {
    margin: 0 15px;

    list-style: none;
    transition: 0.5s;

    &:hover {
      transform: scale(1.1);
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
    }
  }

  a {
    color: var(--white);

    letter-spacing: 3px;
    font-weight: 500;
    font-size: 1.2rem;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

const NavbarBurguer = styled.div`
  display: none;
  cursor: pointer;
  align-items: center;

  div {
    width: 25px;
    height: 3px;
    background-color: var(--white);
    margin: 5px;
    transition: all 0.3s ease;
  }

  @media (max-width: 800px) {
    display: block;
    align-self: center;
    margin-right: 60px;

    .toggle .line1 {
      transform: rotate(-45deg) translate(-5px, 6px);
    }

    .toggle .line2 {
      opacity: 0;
    }

    .toggle .line3 {
      transform: rotate(45deg) translate(-5px, -6px);
    }
  }
`;

const Line1 = styled.div``;
const Line2 = styled.div``;
const Line3 = styled.div``;

export { NavbarContainer, NavbarContent, NavbarLogo, NavbarLinks, NavbarBurguer, Line1, Line2, Line3 }