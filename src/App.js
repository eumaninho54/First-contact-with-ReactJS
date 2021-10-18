import React, {useState} from "react";
import { BrowserRouter } from 'react-router-dom'

import Header from "./components/header";
import Footer from "./components/footer";

import Login from "./pages/Login";

import './App.css';
import Routes from "./Routes";


function App(){

  const [user, setUser] = useState(null)

  if(user === null){
    return(
      <Login/> 
    )
  }

  return (
    <BrowserRouter>
      <Header/>

      <Routes/>

      <Footer/>
    </BrowserRouter>
  )
}

export default App