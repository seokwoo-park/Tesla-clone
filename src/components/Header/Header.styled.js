import styled from "styled-components";

export const StyledHeader = styled.div`
  top: 0;
  left: 0;
  right: 0;
  min-height: 4em;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  z-index: 1;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */

  a {
    font-weight: 600;
    padding: 0 0.8em;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    display: none;
  }
`;

export const SideMenu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  i {
    transform: scale(1.5);
    margin: 0 1em;
  }
`;

export const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  width: 15em;
  list-style: none;
  padding: 1.5em;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  opacity: ${({ showBurger }) => (showBurger ? "1" : "0")};
  transform: ${({ showBurger }) =>
    showBurger ? "translate(0)" : "translate(100%)"};

  transition: all 0.6s ease-in-out;

  li {
    font-weight: 600;
    padding: 0.5em 1em;
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
      border-radius: 10px;
    }
  }
`;

export const CloseIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  i {
    transform: scale(1.5);
    cursor: pointer;
    padding: 0.4em;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
      border-radius: 100%;
    }
  }
`;

export const BurgerOverlay = styled.div`
  position: absolute;
  display: ${({ showBurger }) => (showBurger ? "block" : "none")};
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(6px);
  height: 100vh;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 9;

 
  }
`;
