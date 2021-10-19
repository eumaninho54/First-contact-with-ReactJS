import React from "react";
import { HeaderHome, MainHome } from './styled'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'



// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    return(
        <BrowserRouter>
            <HeaderHome>
                <h1>A page foi construída em <span className='font_high'>ReactJs</span></h1>
                <p>Primeira experiência com a blibioteca</p>
                <img src='react.png' id='ReactJs_img' alt='image_logo_reactjs'></img>
            </HeaderHome>

            <MainHome>
                <section>
                    <article id='article0_left' className='article0'>
                        <h1>O que é React?</h1>
                            <p>React JS é uma biblioteca JavaScript para a criação de interfaces de 
                            usuário. Criado em 2011 pelo time do Facebook, o React surgiu com o 
                            objetivo de otimizar a atualização e a sincronização de atividades 
                            simultâneas no feed de notícias da rede social, entre eles chat, status, 
                            listagem de contatos e outros.</p>
                    </article>

                    <img src='framework1_00000.png' alt='lib_react'></img>

                    <article id='article0_right' className='article0'>
                        <h1>Biblioteca ou Framework?</h1>
                            <p>Segundo seu slogan oficial, React é uma biblioteca para construção de 
                            interfaces de usuário. React não é um framework – nem mesmo é exclusivo 
                            para web. É utilizado com outras bibliotecas para renderização em certos 
                            ambientes. Por exemplo, React Native pode ser usado para construção de 
                            aplicativos móveis; React 360 pode ser usado para construir aplicações 
                            de realidade virtual; e muitas outras possibilidades.</p>
                    </article>
                </section>

            </MainHome>
            
        </BrowserRouter>
    )
}