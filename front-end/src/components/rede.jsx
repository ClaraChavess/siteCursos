import React from "react";
import './rede.module.css';
import styles from './rede.module.css';


//Imagens:
import Redes from './imagens/redes_1.png';
import Redes2 from './imagens/redes_2.png';
import Redes3 from './imagens/rede_3.png';

function rede() {
    return (
        <div>
            <main>
                <div className={styles.conteudo}>
                    <h1 className={styles.titulo}>Redes de computadores</h1>
                    <h2>O que é?</h2>
                    <p className={styles.para1}>
                        Um profissional que trabalha com redes de computadores é alguém especializado em planejar, configurar, gerenciar e manter redes que conectam diferentes dispositivos, como computadores, servidores, roteadores e switches. Ele garante que essas redes funcionem de forma eficiente, segura e estável.
                    </p>
                    <hr />
                </div>
                <aside>
                    <img src={Redes} alt="Redes de Computadores" className={styles.redesCompu} />
                </aside>
            </main>
            <section>
                <aside className={styles.imagem_redes}>
                    <img src={Redes2} alt="Conceitos de Redes" className={styles.conceitoRedes} />
                </aside>
                <div className={styles.conteudo2}>
                    <h2>Conceitos Básicos de Redes</h2>
                    <p className={styles.para2}>
                        Aprenda os fundamentos das redes de computadores, entendendo como dispositivos se conectam e se comunicam. Você conhecerá os diferentes tipos de redes (LAN, WAN, Wi-Fi), os modelos de comunicação como OSI e TCP/IP, e como tudo isso possibilita a troca de informações e o acesso à internet. É a base essencial para quem deseja começar na área de tecnologia e redes.
                    </p>
                    <hr />
                </div>
            </section>
            <section>
                <div className={styles.conteudo}>
                    <h2>Configuração e manutenção de redes</h2>
                    <p className={styles.para3}>
                        Nesse módulo, você aprenderá a montar, ajustar e gerenciar redes de computadores, garantindo sua eficiência e estabilidade. Desde conectar dispositivos e configurar roteadores e switches até resolver problemas e expandir redes, o curso oferece uma abordagem prática com ferramentas reais e simuladores. Ideal para quem quer criar soluções de conectividade seguras e funcionais, seja em ambientes domésticos ou empresariais.
                    </p>
                    <hr />
                </div>
                <aside>
                    <img src={Redes3} alt="Manutenção de Redes" className={styles.manuRedes} />
                </aside>
            </section>

        </div>
    );
}
export default rede;