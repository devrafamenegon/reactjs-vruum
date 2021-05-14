import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router';

import { CloseIcon, NavbarMobileClose, NavbarMobileContainer, NavbarMobileLinks, NavbarMobileLi } from "../styles/components/NavbarMobile";
import { handleIsActive } from "../utils/isActive";

interface NavbarMobileProps {
  isOpen: boolean;
  toggle(): void;
}

export function NavbarMobile(props: NavbarMobileProps) {

  const router = useRouter();

  return(
    <NavbarMobileContainer isOpen={props.isOpen}>
      <NavbarMobileLinks>
        <NavbarMobileLi isActive={(handleIsActive(router) === 0)} color="#e7e7e7">
          <Link href="/">
            <a>HOME</a>
          </Link>
        </NavbarMobileLi >
        <NavbarMobileLi isActive={(handleIsActive(router) === 1)} color="var(--red)">
          <Link href="/dashboard/consumption">
            <a>CONSUMO</a>
          </Link>
        </NavbarMobileLi>
        <NavbarMobileLi isActive={(handleIsActive(router) === 2)} color="var(--green)">
          <Link href="/dashboard/fuel">
            <a>COMBUSTÍVEL</a>
          </Link>
        </NavbarMobileLi>
        <NavbarMobileLi isActive={(handleIsActive(router) === 3)} color="var(--blue)">
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
