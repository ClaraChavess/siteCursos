import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from './UserContext'// Certifique-se de que o caminho está correto

import styles from "./CriarConta.module.css";

function CriarConta() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confSenha, setConfSenha] = useState("");
  const { register } = useContext(AuthContext); // Aqui não pode estar undefined
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (senha !== confSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    try {
      await register(nome, email, senha);
      navigate("/meuscursos");
    } catch (error) {
      alert("Erro ao criar conta. Tente novamente.");
    }
  };

  return (
    <div className="conta">
      <h1 className={styles.tituloConta}>Crie aqui sua conta</h1>
      <section className={styles.secaoForm}>
        <div className={styles.formInscricao}>
          <div className={styles.Formtitulo}>
            <h2 className={styles.tituloForm}>Crie sua conta!</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.divForm}>
                <p className={styles.paragrafoForm}><b>Nome:</b></p>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} className={styles.inputsForm} placeholder="Seu nome" required />
              </div>
              <div className={styles.divForm}>
                <p className={styles.paragrafoForm}><b>Email:</b></p>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.inputsForm} placeholder="seuemail@gmail.com" required />
              </div>
              <div className={styles.divForm}>
                <p className={styles.paragrafoForm}><b>Senha:</b></p>
                <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} className={styles.inputsForm} placeholder="Sua senha" required />
              </div>
              <div className={styles.divForm}>
                <p className={styles.paragrafoForm}><b>Confirme sua senha:</b></p>
                <input type="password" value={confSenha} onChange={(e) => setConfSenha(e.target.value)} className={styles.inputsForm} placeholder="Confirme sua senha" required />
              </div>
              <br />
              <button type="submit" className={styles.botaoForm}>ENVIAR</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CriarConta;
