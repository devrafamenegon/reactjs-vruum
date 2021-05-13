import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router';

import { CloseIcon, NavbarMobileClose, NavbarMobileContainer, NavbarMobileLinks, NavbarMobileLi } from "../styles/components/NavbarMobile";

interface NavbarMobileProps {
  isOpen: boolean;
  toggle(): void;
}

export function NavbarMobile(props: NavbarMobileProps) {

  const router = useRouter();

  return(
    <NavbarMobileContainer isOpen={props.isOpen}>
      <NavbarMobileLinks>
        <NavbarMobileLi isActive={router.pathname == "/" ? true : false} color="#e7e7e7">
          <Link href="/">
            <a>HOME</a>
          </Link>
        </NavbarMobileLi >
        <NavbarMobileLi isActive={router.pathname == "/dashboard/consumption" ? true : false} color="var(--red)">
          <Link href="/dashboard/consumption">
            <a>CONSUMO</a>
          </Link>
        </NavbarMobileLi>
        <NavbarMobileLi isActive={router.pathname == "/dashboard/fuel" ? true : false} color="var(--green)">
          <Link href="/dashboard/fuel">
            <a>COMBUSTÍVEL</a>
          </Link>
        </NavbarMobileLi>
        <NavbarMobileLi isActive={router.pathname == "/dashboard/course" ? true : false} color="var(--blue)">
          <Link href="/dashboard/course">
            <a>PERCURSO</a>
          </Link>
        </NavbarMobileLi>
      </NavbarMobileLinks>
      
      <NavbarMobileClose onClick={props.toggle}>
        <CloseIcon size="25" color="var(--white)" />
      </NavbarMobileClose>

    </NavbarMobileContainer>
  );
}