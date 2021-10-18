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
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="/config">Configurações</Link></li>
                        <li>Sair</li>
                    </ul>
                </nav>
            </div>
        </AreaHeader>
    )
}

export default Header