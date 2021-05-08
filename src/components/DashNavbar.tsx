import Link from 'next/link';
import { NavbarContainer, NavbarContent, NavbarLogo, NavbarLinks, NavbarBurguer, Line1, Line2, Line3 } from '../styles/components/DashNavbar';
import React, { useState } from 'react';

interface DashNavbarProps {
  color: string;
}

export function DashNavbar(props: DashNavbarProps) {
  const [burguerToggle, setBurgerToggle] = useState(false);

  function burguer() {
    
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
        
        {/* burguer */}
        <NavbarBurguer>
          <Line1 />
          <Line2 />
          <Line3 />
        </NavbarBurguer>

      </NavbarContent>
    </NavbarContainer>
  );
}