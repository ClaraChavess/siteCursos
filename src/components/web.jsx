import React from "react";
import './web.module.css';
import styles from './web.module.css';

import Web from './imagens/programaweb.png';
import HTML_CSS from './imagens/html_css1.png';
import JS from './imagens/html_cod1.png';


function web() {
    return (
        <div>
            <main className={styles.mainWeb}>
                <div className={styles.divimg1}>
                    <div>
                        <img src={Web} alt="" className={styles.img1} />
                    </div>
                </div>
                    <div className={styles.conteudo}>
                        <h1 className={styles.titulo}>PROGRAMAÇÃO WEB</h1>
                        <h2 className={styles.subtitulo}>O que é?</h2>
                        <p className={styles.paragrafoWeb}>
                            Um programador de desenvolvimento web é um profissional responsável por criar e manter sites e aplicativos para a web. Ele utiliza linguagens de programação como HTML, CSS, JavaScript e outras para desenvolver interfaces e funcionalidades que atendam às necessidades dos usuários e empresas, garantindo um design atrativo, desempenho eficiente e experiência de uso de qualidade.
                        </p>
                        <hr className={styles.linhaWeb} />
                    </div>
            </main>

            <section className={styles.secaoWeb}>
                <div className={styles.conteudo2}>
                    <h2 className={styles.titulo}>HTML & CSS</h2>
                    <p className={styles.paragrafoWeb}>
                        HTML e CSS são como montar uma festa incrível! 
                        O HTML é o esqueleto da festa – ele organiza as coisas: coloca as mesas, as cadeiras, os balões e define onde tudo vai ficar. Sem ele, a festa não existe!
                        Já o CSS é o estilista da festa – ele escolhe as cores dos balões, o tipo de música, o brilho das luzes e até o tema (unicórnios, piratas, ou elegância total!). Sem CSS, sua festa seria só funcional, mas sem graça.
                        Juntos, HTML e CSS transformam qualquer site em uma super comemoração visual e organizada! 
                    </p>
                    <hr className={styles.linhaWeb}/>
                </div>
                <div className={styles.fotos_css_html}>
                    <img src={HTML_CSS} alt="" className={styles.html_css} />
                </div>
            </section>
            
            <section className={styles.secaoWeb}>
            <div className={styles.fotos_js}>
                    <img src={JS} alt="" className={styles.img_js} />
                </div>
                <div className={styles.conteudo}>
                    <h2 className={styles.titulo}>JAVASCRIPT</h2>
                    <p className={styles.paragrafoWeb}>
                        JavaScript é o animador da festa! 
                        Enquanto o HTML organiza o espaço e o CSS deixa tudo bonito, o JavaScript traz a diversão. Ele faz os balões voarem, as luzes piscarem, a música tocar e até os convidados dançarem sozinhos! 
                        É o JavaScript que transforma a festa em algo interativo e dinâmico, deixando tudo mais vivo e emocionante. Sem ele, seria só uma festa estática e sem movimento. 
                    </p>
                    <hr className={styles.linhaWeb} />
                </div>
            </section>
            
        </div>
    );
}
export default web;