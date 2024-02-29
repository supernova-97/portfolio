import React from "react";
import NavBar from "./components/NavBar";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    
  }
`

export default function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
    </>
  );
}
