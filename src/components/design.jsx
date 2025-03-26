import React from "react";
import './design.module.css';
import styles from './design.module.css';
import FormInscricao from "./formInscricao";

function design(){
    return(
        <><div>
            <div className={styles.detalhe1}>
                <img src="./imagens/detalhe1.png" alt="Detalhe 1" className={styles.fotoDetalhe1} />
            </div>
        </div><main className={styles.conteudoPrincipal}>
                <section id="design">
                    <div id="titulos">
                        <h1 id="titulo_design">DESIGN</h1>
                        <h2 id="subtitulo">Explore sua criatividade</h2>
                        <hr id="linha_design" />
                    </div>
                    <div id="conteudo_principal">
                        <div id="conteudo">
                            <p id="conteudo_sobre_design">Um designer é alguém que trabalha na criação e concepção de soluções visuais para uma variedade de propósitos e contextos. Isso pode incluir design gráfico, design de produto, design de interação, design de experiência do usuário (UX), design de interface do usuário (UI), entre outros campos.</p>
                        </div>
                        <div id="imagem_referencia">
                            <img src="./imagens/Designer (2).png" alt="Designer" id="designer" />
                        </div>
                    </div>
                </section>

                <section id="secao_figma">
                    <div id="titulos2">
                        <h1 id="figma">FIGMA</h1>
                    </div>
                    <div id="conteudo1">
                        <p id="conteudo_sobre_figma">Nessa disciplina, iremos trabalha-la com a plataforma Figma. Será aprendido a fazer telas para smartphones, desktops e derivados. Telas responsivas que variam de dispositivos e suas respectivas proporções. Já pensou o quão íncrivel seria ficar no conforto de sua residência fazendo telas para diferentes empresas e perfis?</p>
                    </div>
                    <div id="botao">
                        <a href="https://www.figma.com/design/8L4GM19HslpRsJbMuZyyGW/Untitled?node-id=6-23&node-type=frame&t=ay0dEaGrJEu93ctG-0">
                            <button id="botao_para_figma">FIGMA</button>
                        </a>
                    </div>
                    <div id="imagem_referencia2">
                        <img src="./imagens/FIGMA.png" alt="Figma" id="figmer" />
                    </div>
                </section>

                <section id="plataforma">
                    <div id="titulos3">
                        <h1 id="figma">CONHECA NOSSA PLATAFORMA</h1>
                    </div>
                    <div id="painel_video">
                        <div id="video">
                            <iframe width="95%" height="95%" src="https://www.youtube.com/embed/uan_tk6j_rg?si=yubzokcI7LL-hneL" title="YouTube video" allowFullScreen></iframe>
                        </div>
                    </div>
                </section>

               <FormInscricao></FormInscricao>
            </main></>
    )
}
export default design;