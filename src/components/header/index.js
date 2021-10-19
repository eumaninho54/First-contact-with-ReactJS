import React from "react";
import { AreaHeader } from "./styled";
import { Link } from "react-router-dom"

function Header(){
    return(
        <AreaHeader>
            <div className="container">
                <img className="icone" src="../../../list_icone.png" />
                <div className="logo">
                    <img className="logo" src="../../../LogoManin.png" />
                </div>

                <nav>
                    <ul>
                        <li><Link to="/">Sobre</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
            </div>
        </AreaHeader>
    )
}

export default Header