import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Menu, SideMenu, StyledHeader } from "./Header.styled";
import logoImg from "../../assets/images/logo.svg";

function Header() {
  return (
    <StyledHeader>
      <a>
        <img src={logoImg} alt="Tesla logo" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
      </Menu>
      <SideMenu>
        <Menu>
          <a href="#">Shop</a>
          <a href="#">Account</a>
        </Menu>
        <i>
          <AiOutlineMenu />
        </i>
      </SideMenu>
    </StyledHeader>
  );
}

export default Header;
