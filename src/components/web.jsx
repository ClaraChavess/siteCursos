import React from "react";
import './web.module.css';
import FormInscricao from "./formInscricao";


function web() {
    return (
        <div>
            <main>
                <div id="cont">
                    <div className="conteudo">
                        <h1 className="titulo">PROGRAMAÇÃO WEB</h1>
                        <h2>O que é?</h2>
                        <p>
                            Um programador de desenvolvimento web é um profissional responsável por criar e manter sites e aplicativos para a web. Ele utiliza linguagens de programação como HTML, CSS, JavaScript e outras para desenvolver interfaces e funcionalidades que atendam às necessidades dos usuários e empresas, garantindo um design atrativo, desempenho eficiente e experiência de uso de qualidade.
                        </p>
                        <hr />
                    </div>
                    <div id="div-img1">
                        <img src="/imagens/programaweb.png" alt="" id="img1" />
                    </div>
                </div>
            </main>
            <section>
                <div className="conteudo2">
                    <h2>HTML & CSS</h2>
                    <p>
                        HTML e CSS são como montar uma festa incrível! 
                        O HTML é o esqueleto da festa – ele organiza as coisas: coloca as mesas, as cadeiras, os balões e define onde tudo vai ficar. Sem ele, a festa não existe!
                        Já o CSS é o estilista da festa – ele escolhe as cores dos balões, o tipo de música, o brilho das luzes e até o tema (unicórnios, piratas, ou elegância total!). Sem CSS, sua festa seria só funcional, mas sem graça.
                        Juntos, HTML e CSS transformam qualquer site em uma super comemoração visual e organizada! 
                    </p>
                    <hr />
                </div>
                <div id="fotos_css_html">
                    <img src="/imagens/html_css1.png" alt="" id="html_css" />
                </div>
            </section>
            <section>
                <div className="conteudo">
                    <h2>JAVASCRIPT</h2>
                    <p>
                        JavaScript é o animador da festa! 
                        Enquanto o HTML organiza o espaço e o CSS deixa tudo bonito, o JavaScript traz a diversão. Ele faz os balões voarem, as luzes piscarem, a música tocar e até os convidados dançarem sozinhos! 
                        É o JavaScript que transforma a festa em algo interativo e dinâmico, deixando tudo mais vivo e emocionante. Sem ele, seria só uma festa estática e sem movimento. 
                    </p>
                    <hr />
                </div>
                <div id="fotos_js">
                    <img src="/imagens/html_cod1.png" alt="" id="img_js" />
                </div>
            </section>
            <FormInscricao></FormInscricao>
        </div>
    );
}
export default web;