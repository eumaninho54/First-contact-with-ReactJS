import React from "react";
import { AreaHeader } from "./styled";
import { Link } from "react-router-dom"

import list_img from './imgs/list_icone.png'

import logomanin_img from './imgs/LogoManin.png'

function Header(){
    return(
        <AreaHeader>
            <div className="container">

                <img className="icone" alt='img_menu' src={list_img} />

                <div className="logo">
                    <img className="logo" alt='logo_Manin' src={logomanin_img} />
                </div>

                <nav>
                    <ul>
                        <li><Link to="/First-contact-with-ReactJS">Sobre</Link></li>
                        <li><Link to="/First-contact-with-ReactJS/login">Login</Link></li>
                    </ul>
                </nav>
            </div>
        </AreaHeader>
    )
}

export default Header