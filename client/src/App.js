import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./utils/Themes"; // Make sure this path is correct
import { BrowserRouter } from "react-router-dom";
import Authentication from "./pages/Authentication";

const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Container>
            <Authentication/> 
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
