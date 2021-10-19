import React from "react";
import { BrowserRouter } from 'react-router-dom'

import Header from "./components/header";
import Footer from "./components/footer";


import './App.css';
import Routes from "./Routes";


function App(){

  return (
    <BrowserRouter>
      <Header/>

      <Routes/>

      <Footer/>
    </BrowserRouter>
  )
}

export default App