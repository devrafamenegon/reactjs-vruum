import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { NavbarMobile } from './NavbarMobile';

import { NavbarContainer, NavbarContent, NavbarLogo, NavbarLinks, NavbarMobileButton, Burguer, NavLi } from '../styles/components/DashNavbar';

import { handleIsActive } from '../utils/isActive';

interface DashNavbarProps {
  color: string;
}

export function DashNavbar(props: DashNavbarProps) {
  const [burguerToggle, setBurgerToggle] = useState(false);

  function burguer() {
    setBurgerToggle(!burguerToggle);
  }

  const router = useRouter();

  return (
    <NavbarContainer backgroundColor={props.color}>
      <NavbarContent>
        {/* nav-logo */}
        <NavbarLogo>
          <a href="/">
            <img src="/logo.svg" alt="Logo"/>
          </a>
        </NavbarLogo>

        {/* nav-buttons */}
        <NavbarLinks>
          <NavLi isActive={(handleIsActive(router) === 0)}>
            <Link href="/">
              <a>HOME</a>
            </Link>
          </NavLi>
          <NavLi isActive={(handleIsActive(router) === 1)}>
            <Link href="/dashboard/consumption">
              <a>CONSUMO</a>
            </Link>
          </NavLi>
          <NavLi isActive={(handleIsActive(router) === 2)}>
            <Link href="/dashboard/fuel">
              <a>COMBUSTÍVEL</a>
            </Link>
          </NavLi>
          <NavLi isActive={(handleIsActive(router) === 3)}>
            <Link href="/dashboard/course">
              <a>PERCURSO</a>
            </Link>
          </NavLi>
        </NavbarLinks>
        
        <NavbarMobileButton>
          <Burguer size="25px" onClick={burguer}/>
        </NavbarMobileButton>
        
        <NavbarMobile toggle={burguer} isOpen={burguerToggle} />
        
      </NavbarContent>
    </NavbarContainer>
  );
}
