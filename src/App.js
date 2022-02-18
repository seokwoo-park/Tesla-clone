import React from "react";
import { ThemeProvider } from "styled-components";
import { Header, Home } from "./components";

const theme = {
  mediaQuery: {
    tablet: "945px",
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Home />
    </ThemeProvider>
  );
}

export default App;
