import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header, Home, Detail } from "./components";

const theme = {
  mediaQuery: {
    tablet: "945px",
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
      <Header />
    </ThemeProvider>
  );
}

export default App;
