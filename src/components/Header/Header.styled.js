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
