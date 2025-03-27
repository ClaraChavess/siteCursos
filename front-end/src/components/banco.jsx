import React from "react"
import './banco.module.css';
import styles from './banco.module.css';
import InscreverBotao from "./InscreverBotao";


import bd from './imagens/banco_1.png';
import BD2 from './imagens/banco_2.png';
import BD3 from './imagens/banco_3.png';


function banco(){
   const curso = { id: 6, nome: "Banco de Dados" };
    return(
        <div>
            <main className={styles.mainBanco}>
              <div className={styles.conteudoBanco}>
                 <h1 className={styles.titulo}>BANCO DE DADOS</h1>
                 <h2 className={styles.tituloBanco}>O que é?</h2>
                 <p className={styles.paragrafoBanco}>
                    Um banco de dados é uma coleção organizada de informações - ou dados - estruturadas, normalmente armazenadas eletronicamente em um sistema de computador. Um banco de dados é geralmente controlado por um sistema de gerenciamento de banco de dados (DBMS). Juntos, os dados e o DBMS, juntamente com os aplicativos associados a eles, são chamados de sistema de banco de dados, geralmente abreviados para apenas banco de dados.
                 </p>
                 <hr/>
              </div>
              <aside className={styles.asideBanco}>    
                  <img src={bd} className={styles.imagensBanco} alt="Banco de Dados" />
              </aside>
            </main>

            <section className={styles.sectionBanco}>
                <aside id="ixquerda">
                   <img src={BD2} alt="Fundamentos de Banco de Dados" className={styles.imagensBanco2}/>
                </aside>
                <div className={styles.conteudoBanco2}>
                   <h2 className={styles.tituloBanco} >FUNDAMENTOS DE BANCO DE DADOS</h2>
                   <ul className={styles.lista_dados}>
                      <li className={styles.lista_dados}>Armazenamento de dados: Um banco de dados é uma coleção de dados estruturados e organizados que podem ser armazenados eletronicamente. </li>
                      <li className={styles.lista_dados}>Sistema de gerenciamento de banco de dados (SGBD): O SGBD é um software que facilita a administração, manipulação e manutenção do banco de dados. </li>
                      <li className={styles.lista_dados}>Linguagem de consulta estruturada (SQL): A maioria dos bancos de dados usa a SQL para escrever e consultar dados. </li>
                   </ul>
                   <hr/>
                </div>
            </section>


            <section>
               <div className={styles.conteudoBanco}>
                  <h2 className={styles.tituloBanco}>MySQL</h2>
                  <p className={styles.paragrafoBanco}>
                     MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto. Ele é usado para armazenar dados em tabelas separadas, que são organizadas em arquivos físicos otimizados para velocidade.  O MySQL é um dos bancos de dados mais populares do mundo, sendo usado em sites de comércio eletrônico, mídias sociais e aplicativos. 
                  </p>
                  <hr />
               </div>
               <aside>
                  <img src={BD3} alt="MySQL"  className={styles.imagensBanco} />
               </aside>
            </section>

            <InscreverBotao curso={curso} />
        </div>

    );
}
export default banco;