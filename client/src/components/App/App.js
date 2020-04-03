import React from "react";
import { SodukuForm } from "../SudokuForm";
import styled, { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";
const Container = styled.div`
  text-align: center;
  margin: 0 auto 4em;
`;

const Heading = styled.h1`
  font-family: "Bungee Shade", cursive;
  font-size: 3rem;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1e272e;
    color: #d2dae2;
    font-family: 'Lato', sans-serif;
  }
`;

const Footer = styled.div`
  background-color: #3c40c6;
  color: #d2dae2;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 0.5rem;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Normalize />
      <Container>
        <Heading>Sudoku Solver</Heading>
        <SodukuForm />
      </Container>
      <Footer>
        made with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        by daaveuk
      </Footer>
    </>
  );
};

export default App;
