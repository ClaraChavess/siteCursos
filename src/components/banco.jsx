import React from "react"
import './banco.css';




function banco(){
    return(
        <div>
            <main>
              <div className="conteudo">
                 <h1 className="titulo">BANCO DE DADOS</h1>
                 <h2>O que é?</h2>
                 <p>
                    Um banco de dados é uma coleção organizada de informações - ou dados - estruturadas, normalmente armazenadas eletronicamente em um sistema de computador. Um banco de dados é geralmente controlado por um sistema de gerenciamento de banco de dados (DBMS). Juntos, os dados e o DBMS, juntamente com os aplicativos associados a eles, são chamados de sistema de banco de dados, geralmente abreviados para apenas banco de dados.
                 </p>
                 <hr/>
              </div>
              <aside>    
                  <img src="imagens/banco_1.png" id="bebe" alt="Banco de Dados" />
              </aside>
            </main>

            <section>
                <aside id="ixquerda">
                   <img src="imagens/banco_2.png" alt="Fundamentos de Banco de Dados" />
                </aside>
                <div className="conteudo2">
                   <h2>FUNDAMENTOS DE BANCO DE DADOS</h2>
                   <ul className="lista_dados">
                      <li>Armazenamento de dados: Um banco de dados é uma coleção de dados estruturados e organizados que podem ser armazenados eletronicamente. </li>
                      <li>Sistema de gerenciamento de banco de dados (SGBD): O SGBD é um software que facilita a administração, manipulação e manutenção do banco de dados. </li>
                      <li>Linguagem de consulta estruturada (SQL): A maioria dos bancos de dados usa a SQL para escrever e consultar dados. </li>
                   </ul>
                   <hr/>
                </div>
            </section>


            <section>
               <div className="conteudo">
                  <h2>MySQL</h2>
                  <p>
                     MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto. Ele é usado para armazenar dados em tabelas separadas, que são organizadas em arquivos físicos otimizados para velocidade.  O MySQL é um dos bancos de dados mais populares do mundo, sendo usado em sites de comércio eletrônico, mídias sociais e aplicativos. 
                  </p>
                  <hr />
               </div>
               <aside>
                  <img src="imagens/banco_3.png" alt="MySQL" />
               </aside>
            </section>
    
            <section className="secao_form">
               <div className="form_inscricao"> 
                  <h2 className="titulo_form">Formulário de inscrição</h2>
                  <form name="form_inscricao" action="" onSubmit={(e) => e.preventDefault()}>
                     <b><p className="paragrafo_form">Email</p></b>
                     <input type="email" name="email" id="email" placeholder="seuemail@gmail.com" oninput="emailValidate" />
                     <br /><span id="erroemail"></span>
            
                     <b><p className="paragrafo_form">Senha</p></b>
                     <input type="password" name="senha" id="senha" placeholder="Sua senha" />
                     <br /><span id="errosenha"></span>
            
                     <b><p className="paragrafo_form">Modalidade</p></b>
                     <select name="" id="modalidade">
                        <option value="Presencial">Presencial</option>
                        <option value="EAD">Longa distância (EAD)</option>
                     </select>
                     <br />

                     <input type="submit" value="ENVIAR" className="botao_form" onClick="inscricao('BANCO')" />
                   </form>
                </div>
            </section>
        </div>

    );
}
export default banco;