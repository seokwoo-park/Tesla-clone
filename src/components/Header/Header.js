import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {
  BurgerNav,
  CloseIcon,
  Menu,
  BurgerOverlay,
  SideMenu,
  StyledHeader,
} from "./Header.styled";
import logoImg from "../../assets/images/logo.svg";

function Header() {
  const [showBurger, setShowBurger] = useState(false);

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
        <i onClick={() => setShowBurger(true)}>
          <AiOutlineMenu />
        </i>
      </SideMenu>
      <BurgerOverlay
        onClick={() => setShowBurger(false)}
        showBurger={showBurger}
      />
      <BurgerNav showBurger={showBurger}>
        <CloseIcon>
          <i onClick={() => setShowBurger(false)}>
            <AiOutlineClose />
          </i>
        </CloseIcon>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#"></a>
        </li>
        <li>
          <a href="#"></a>
        </li>
        <li>
          <a href="#"></a>
        </li>
        <li>
          <a href="#"></a>
        </li>
      </BurgerNav>
    </StyledHeader>
  );
}

export default Header;
