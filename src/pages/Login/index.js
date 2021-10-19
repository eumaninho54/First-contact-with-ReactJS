import React, { useEffect } from "react";
import { AreaLogin, Bg } from "./styled"
import { BtnDefaultIcons, BtnDefault } from "../../components/styled";
import Aos from 'aos'
import 'aos/dist/aos.css'

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'


import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const duration = 2000

    useEffect(()=>{
        Aos.init({ duration: duration})
    }, [])

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/registrar">
                    <div data-aos='fade'>
                        <AreaLogin>
                            <h1 className='organize'><Link to="/"><ArrowBackIosNewIcon/></Link> Crie sua conta</h1>
                            <p>Crie sua conta, é grátis!</p>
                            <form>
                                <div className="form_input">
                                    <label>Nome</label>
                                    <input type="Name"></input>
                                </div>
                                <div className="form_input">
                                    <label>E-mail</label>
                                    <input type="email"></input>
                                </div>
                                <div className="form_input">
                                    <label>Senha</label>
                                    <input type="passwordl"></input>
                                </div>
                        
                                <BtnDefault>
                                    Criar
                                </BtnDefault>
                                <div className="footerLogin">
                                    Já possui uma conta?
                                    <Link to='/'>Faça login</Link>
                        
                                </div>
                            </form>
                        </AreaLogin>
                    </div>
                </Route>

                <Route path="*">
                    <Bg>
                        <div data-aos='fade-up'>
                            <AreaLogin>
                                <h1>Faça login em sua conta</h1>
                                <BtnDefaultIcons>
                                    <FacebookIcon/>
                                    <div className="center">Fazer login com o Facebook</div>
                                </BtnDefaultIcons>
                                <BtnDefaultIcons>
                                    <GoogleIcon/>
                                    <div className="center">Fazer login com o Google</div>
                                </BtnDefaultIcons>
                                <p>OU</p>
                                <form>
                                    <div className="form_input">
                                        <label>E-mail</label>
                                        <input type="email"></input>
                                    </div>
                                    <div className="form_input">
                                        <label>Senha</label>
                                        <input type="password"></input>
                                    </div>
                        
                                    <BtnDefault>
                                        Entrar
                                    </BtnDefault>
                                    <div className="footerLogin">
                                        Não tem uma conta?
                                        <Link to='/registrar'>Registre-se</Link>
                                    </div>
                                </form>
                            </AreaLogin>
                        </div>
                    </Bg>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}