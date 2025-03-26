import React from "react";
import './rede.module.css';
import styles from './rede.module.css';
import FormInscricao from "./formInscricao";

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
            <FormInscricao></FormInscricao>
        </div>
    );
}
export default rede;