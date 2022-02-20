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
import { selectCars } from "../../features/car/carSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const [showBurger, setShowBurger] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <StyledHeader>
      <a>
        <img src={logoImg} alt="Tesla logo" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <Link to={car.title.toLowerCase().replace(" ", "")} key={index}>
              {car.title}
            </Link>
          ))}
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
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="#">{car.title}</a>
            </li>
          ))}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadaster</a>
        </li>
      </BurgerNav>
    </StyledHeader>
  );
}

export default Header;
