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
  justify-content: center;
  flex-wrap: wrap;
`;

export const TextWrapper = styled(DetailText)`
  flex-direction: column;
  margin: 2.5em;

  h3,
  p {
    color: white;
  }

  h3 {
    font-size: 2em;
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    margin: 1em;
  }
`;

export const DetailBtn = styled.button`
  background-color: transparent;
  border: solid 3px #fff;
  border-radius: 100px;
  padding: 0.5em 3em;
  color: #fff;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    margin: 1em;
    width: 100%;
  }
`;
