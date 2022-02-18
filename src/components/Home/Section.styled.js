import styled from "styled-components";

export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${({ bgImage }) =>
    `url(${require(`../../assets/images/${bgImage}`)})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  scroll-snap-align: center;
`;

export const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  /* overflow-y: hidden; */
  h1 {
    font-size: 2.5em;
    margin-bottom: 0;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5em;
  margin-bottom: 7%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 2.5em;
  width: 20em;
  padding: 0.5em 1em;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  cursor: pointer;
  font-size: 0.8em;
  font-weight: 600;
  letter-spacing: 1px;
  opacity: 0.85;
`;

export const RightButton = styled(LeftButton)`
  background-color: rgba(255, 255, 255, 0.65);
  color: #000;
`;

export const DownArrow = styled.img`
  margin: 1em 0 0.5em;
  height: 3em;
  animation: animateDown infinite 1.5s;

  @keyframes animateDown {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }

    40% {
      transform: translateY(5px);
    }
    60% {
      transform: translateY(3px);
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
