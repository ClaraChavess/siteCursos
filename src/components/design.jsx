import React from "react";
import './design.css';

function design(){
    return(
        <><div>
            <div id="detalhe1">
                <img src="./imagens/detalhe1.png" alt="Detalhe 1" id="foto_detalhe1" />
            </div>
        </div><main id="conteudo_principal">
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
                        <p id="conteudo_sobre_figma">Nessa disciplina, iremos trabalha-lá com a plataforma Figma. Será aprendido a fazer telas para smartphones, desktops e derivados. Telas responsivas que variam de dispositivos e suas respectivas proporções. Já pensou o quão íncrivel seria ficar no conforto de sua residência fazendo telas para diferentes empresas e perfis?</p>
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
                            <iframe width="95%" height="95%" src="https://www.youtube.com/embed/uan_tk6j_rg?si=yubzokcI7LL-hneL" title="YouTube video" style="border : none;" allowFullScreen></iframe>
                        </div>
                    </div>
                </section>

                <section className="secao_form">
                    <div className="form_inscricao">
                        <h2 className="titulo_form">Formulario de inscricao</h2>
                        <form>
                            <p className="paragrafo_form"><b>Email</b></p>
                            <input type="email" name="email" placeholder="seuemail@gmail.com" /><br />
                            <p className="paragrafo_form"><b>Senha</b></p>
                            <input type="password" name="senha" placeholder="Sua senha" /><br />
                            <p className="paragrafo_form"><b>Modalidade</b></p>
                            <select id="madalidade">
                                <option value="Presencial">Presencial</option>
                                <option value="EAD">Ensino a distancia</option>
                            </select>
                            <br />
                            <button type="submit" className="botao_form">ENVIAR</button>
                        </form>
                    </div>
                </section>
            </main></>
    )
}
export default design;