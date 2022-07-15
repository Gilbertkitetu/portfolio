import React from 'react';
import styled from '@emotion/styled'

import Header from './components/layouts/Header';
import Sidebar from "./components/layouts/Sidebar";
import Footer from "./components/layouts/Footer";

import Email from './components/layouts/Email';
import Content from './components/layouts/Content';

import GlobalStyles from "./components/styles/GlobalStyles";





function App() {
  return (
 
    <Grid>

    <GlobalStyles /> 
    <Header />
    <Sidebar />
    <Content /> 
    <Email />
    <Footer />
    </Grid>

  );
}

export default App;




const Grid = styled.div`
 block-size: min(100vh);
 display:inline-block;
 width: 100%;

 grid-template-areas:
 " header "
 "  main  "
 " footer ";

 @media (min-width: 768px) {
    display: grid;
    
 block-size: min(100vh);
    grid-template-areas:
      "header header header"
      "sidebar  main  email"
      "sidebar footer email";
    grid-template-rows: min-content 1fr min-content;
    grid-template-columns: min-content 1fr min-content;
  }

`;
