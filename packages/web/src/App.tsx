import React from "react";
import { createGlobalStyle } from "styled-components";
import { Header } from "./components/Header";
import { LeftNav } from "./components/LeftNav";
import { ThemeContextProvider } from "./contexts/ThemeContext";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
  }
`;

function App() {
  return (
    <>
      <ThemeContextProvider>
        <>
          <GlobalStyles />
          <Header />
          <LeftNav />
        </>
      </ThemeContextProvider>
    </>
  );
}

export default App;
