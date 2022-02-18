import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap');

 ${normalize}

 * {
 font-family: 'Raleway', sans-serif;
 color: #393c41;
}

body {
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;
}

h1,h2,h3{
  font-weight: 700;
}

a{
  text-decoration: none;
}

`;
