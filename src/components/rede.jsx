import React from "react";
import './rede.css';

function rede() {
    return (
        <div>
            <main>
                <div className="conteudo">
                    <h1 className="titulo">Redes de computadores</h1>
                    <h2>O que é?</h2>
                    <p>
                        Um profissional que trabalha com redes de computadores é alguém especializado em planejar, configurar, gerenciar e manter redes que conectam diferentes dispositivos, como computadores, servidores, roteadores e switches. Ele garante que essas redes funcionem de forma eficiente, segura e estável.
                    </p>
                    <hr />
                </div>
                <aside>
                    <img src="./imagens/redes_1.png" alt="Redes de Computadores" />
                </aside>
            </main>
            <section>
                <aside id="imagem_redes">
                    <img src="./imagens/redes_2.png" alt="Conceitos de Redes" />
                </aside>
                <div className="conteudo2">
                    <h2>Conceitos Básicos de Redes</h2>
                    <p>
                        Aprenda os fundamentos das redes de computadores, entendendo como dispositivos se conectam e se comunicam. Você conhecerá os diferentes tipos de redes (LAN, WAN, Wi-Fi), os modelos de comunicação como OSI e TCP/IP, e como tudo isso possibilita a troca de informações e o acesso à internet. É a base essencial para quem deseja começar na área de tecnologia e redes.
                    </p>
                    <hr />
                </div>
            </section>
            <section>
                <div className="conteudo">
                    <h2>Configuração e manutenção de redes</h2>
                    <p>
                        Nesse módulo, você aprenderá a montar, ajustar e gerenciar redes de computadores, garantindo sua eficiência e estabilidade. Desde conectar dispositivos e configurar roteadores e switches até resolver problemas e expandir redes, o curso oferece uma abordagem prática com ferramentas reais e simuladores. Ideal para quem quer criar soluções de conectividade seguras e funcionais, seja em ambientes domésticos ou empresariais.
                    </p>
                    <hr />
                </div>
                <aside>
                    <img src="./imagens/rede_3.png" alt="Manutenção de Redes" />
                </aside>
            </section>
            <section className="secao_form">
                <div className="form_inscricao">
                    <h2 className="titulo_form">Formulário de inscrição</h2>
                    <form>
                        <p className="paragrafo_form"><b>Email</b></p>
                        <input type="email" name="email" placeholder="seuemail@gmail.com" /><br />
                        <p className="paragrafo_form"><b>Senha</b></p>
                        <input type="password" name="senha" placeholder="Sua senha" /><br />
                        <p className="paragrafo_form"><b>Modalidade</b></p>
                        <select id="modalidade">
                            <option value="Presencial">Presencial</option>
                            <option value="EAD">Longa distância (EAD)</option>
                        </select>
                        <br />
                        <button type="submit" className="botao_form">ENVIAR</button>
                    </form>
                </div>
            </section>
        </div>
    );
}
export default rede;