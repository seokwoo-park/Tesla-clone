import styled from "styled-components";

export const StyledDetail = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(
      to Bottom,
      rgba(20, 20, 20, 0) 75%,
      rgba(20, 20, 20, 0.5) 80%,
      rgba(20, 20, 20, 0.9) 90%,
      rgba(20, 20, 20, 1) 100%
    ),
    ${({ bgImage }) =>
      bgImage && `url(${require(`../../assets/images/${bgImage}`)})`};

  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h2 {
    margin-top: 3em;
    font-size: 2.5em;
  }
`;

export const DetailText = styled.div`
  display: flex;
  align-items: center;
`;

export const TextWrapper = styled(DetailText)`
  flex-direction: column;
  margin: 3em;

  h3,
  p {
    color: white;
  }

  h3 {
    font-size: 2em;
    margin: 0;
  }
`;
