import React from "react";
import Link from "next/link";
import { CloseIcon, NavbarMobileClose, NavbarMobileContainer, NavbarMobileLinks } from "../styles/components/NavbarMobile";

interface NavbarMobileProps {
  isOpen: boolean;
  toggle(): void;
}

export function NavbarMobile(props: NavbarMobileProps) {
  return(
    <NavbarMobileContainer isOpen={props.isOpen}>
      <NavbarMobileLinks>
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
      </NavbarMobileLinks>

      <NavbarMobileClose onClick={props.toggle}>
        <CloseIcon size="25" color="var(--white)" />
      </NavbarMobileClose>

    </NavbarMobileContainer>
  );
}