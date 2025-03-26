import React from "react";
import './poo.module.css';
import styles from './poo.module.css';



function poo() {
    return (
        <div>
            <main id="conteudo_principal">
                <aside id="imagem_poo">    
                    <img src="./imagens/web 1.png" alt="" />
                </aside>
                <div className="conteudo">
                    <h1 className="titulo">PROGRAMAÇÃO ORIENTADA A OBJETOS</h1>
                    <h2>O que é?</h2>
                    <p>
                       A POO é um caminho para o desenvolvimento de software que se destaca pela organização e reutilização do código. Ela permite dividir programas complexos em unidades chamadas objetos, o que facilita a construção de sistemas modulares e flexíveis.            
                    </p>
                    <hr />
                </div>
                <section>
                    <div className="conteudo2">
                        <h2>JAVA</h2>
                        <p>
                           Java é uma linguagem de programação e plataforma de computação que permite criar aplicações para vários dispositivos e sistemas operacionais: Celulares, Computadores, Dispositivos da Internet das Coisas (IoT), Smart TVs        
                        </p>
                        <hr />
                    </div>
                    <aside>
                        <img src="./imagens/codigo.png" alt="Código" />
                    </aside>
                </section>
                <section>
                    <div className="conteudo">
                        <h2>ENCAPSULAMENTO</h2>
                        <p>consiste em ocultar os detalhes internos de um objeto, protegendo os seus dados e métodos.</p>
                        <hr />
                    </div>
                    <div className="conteudo">
                        <h2>POLIMORFISMO</h2>
                        <p>o polimorfismo é a capacidade de um objeto se comportar de maneiras diferentes, dependendo do contexto em que é utilizado.</p>
                        <hr />
                    </div>
                </section>
                <section>
                    <div className="conteudo">
                        <h2>HERANÇA</h2>
                        <p>A Herança possibilita que as classes compartilhem seus atributos, métodos e outros membros da classe entre si. Para a ligação entre as classes, a herança adota um relacionamento esquematizado hierarquicamente.</p>
                        <hr />
                    </div>
                    <div className="conteudo">
                        <h2>ABSTRAÇÃO</h2>
                        <p>A abstração é um princípio fundamental da Programação Orientada a Objetos (POO) que consiste em ocultar detalhes irrelevantes de um problema e focar nos aspectos essenciais.</p>
                        <hr />
                    </div>
                </section>
                
            </main>

        </div>
    );
}
export default poo;