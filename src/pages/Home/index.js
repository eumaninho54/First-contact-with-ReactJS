import React, { useEffect } from "react";
import { HeaderHome, MainHome } from './styled'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

import img_react from '../../components/header/imgs/react.png'
import framework_img from '../../components/header/imgs/framework1_00000.png'
import img_140 from '../../components/header/imgs/140_00000.png'
import redes_img from '../../components/header/imgs/redes_00000.png'



// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    useEffect(()=>{
        Aos.init({ duration: 1400})
    }, [])

    return(
        <BrowserRouter>
            <HeaderHome>
                <h1 data-aos='fade-down'>A page foi construída em <span className='font_high'>ReactJs</span></h1>
                <p data-aos='fade'>Primeira experiência com a blibioteca</p>
                <img data-aos='fade' src={img_react} id='ReactJs_img' alt='image_logo_reactjs'></img>
            </HeaderHome>

            <MainHome>
                <section id='section_0'>
                    <article id='article0_left' className='article0'>
                        <h1 data-aos='fade'>O que é React?</h1>
                            <p data-aos='fade'>React JS é uma biblioteca JavaScript para a criação de interfaces de 
                            usuário. Criado em 2011 pelo time do Facebook, o React surgiu com o 
                            objetivo de otimizar a atualização e a sincronização de atividades 
                            simultâneas no feed de notícias da rede social, entre eles chat, status, 
                            listagem de contatos e outros.</p>
                    </article>

                        <img data-aos='fade' src={framework_img} alt='lib_react'></img>

                    <article id='article0_right' className='article0'>
                        <h1 data-aos='fade'>Biblioteca ou Framework?</h1>
                            <p data-aos='fade'>Segundo seu slogan oficial, React é uma biblioteca para construção de 
                            interfaces de usuário. React não é um framework – nem mesmo é exclusivo 
                            para web. É utilizado com outras bibliotecas para renderização em certos 
                            ambientes. Por exemplo, React Native pode ser usado para construção de 
                            aplicativos móveis; React 360 pode ser usado para construir aplicações 
                            de realidade virtual; e muitas outras possibilidades.</p>
                    </article>
                </section>

                <section id='section_1'>
                    <article>
                        <h1 data-aos='slide-down'>Por Que Usar React?</h1>  
                            <p data-aos='fade-right'>O React tem sido usado por grandes companhias ao redor do mundo. 
                                Algumas delas:</p>
                            <ul data-aos='fade-right'>
                                <li>Netflix</li>
                                <li>Airbnb</li>
                                <li>American Express</li>
                                <li>Facebook</li>
                                <li>WhatsApp</li>
                                <li>eBay</li>
                                <li>Instagram</li>
                            </ul>
                    </article>
                        <img data-aos='zoom-out' id='img_redes' src={redes_img} alt='img_redes'></img>
                </section>

                <section id='section_2'>
                    <article>
                        <h1 data-aos='zoom-out'>React é flexível: tudo é componente</h1>
                        <p data-aos='zoom-out'>Uma das bases do React. O modo como o React trabalha para criar interfaces de usuário 
                            (ou User Interfaces, as UIs) é por meio da quebra de toda a estrutura da aplicação em 
                            componentes.</p>
                    </article>
                        <img data-aos='zoom-out-right' src={img_140} alt='code_img'></img>
                </section>
            </MainHome>
            
        </BrowserRouter>
    )
}