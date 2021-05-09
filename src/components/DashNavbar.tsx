import React, { useState } from 'react';
import Link from 'next/link';

import { NavbarMobile } from './NavbarMobile';

import { NavbarContainer, NavbarContent, NavbarLogo, NavbarLinks, NavbarMobileButton, Burguer } from '../styles/components/DashNavbar';

interface DashNavbarProps {
  color: string;
}

export function DashNavbar(props: DashNavbarProps) {
  const [burguerToggle, setBurgerToggle] = useState(false);

  function burguer() {
    setBurgerToggle(!burguerToggle);
  }

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
          <li>
            <Link href="/">
              <a>HOME</a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/consumption">
              <a>CONSUMO</a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/fuel">
              <a>COMBUSTÍVEL</a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/course">
              <a>PERCURSO</a>
            </Link>
          </li>
        </NavbarLinks>
        
        <NavbarMobileButton>
          <Burguer size="25px" onClick={burguer}/>
        </NavbarMobileButton>
        
        <NavbarMobile toggle={burguer} isOpen={burguerToggle} />
        
      </NavbarContent>
    </NavbarContainer>
  );
}