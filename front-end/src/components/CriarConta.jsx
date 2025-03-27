import React, { useState } from "react";
import axios from "axios";
import styles from "./CriarConta.module.css";

function CriarConta() {
  const [formData, setFormData] = useState({
    nome_usuario: "",
    email_usuario: "",
    senha_usuario: "",
    confirmarSenha: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.senha_usuario !== formData.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/criar-conta", {
        nome_usuario: formData.nome_usuario,
        email_usuario: formData.email_usuario,
        senha_usuario: formData.senha_usuario,
      });

      // Armazenando o nome do usuário no localStorage
      localStorage.setItem("nome_usuario", formData.nome_usuario);

      alert(response.data.message);

      // Resetando o formulário
      setFormData({
        nome_usuario: "",
        email_usuario: "",
        senha_usuario: "",
        confirmarSenha: "",
      });
    } catch (error) {
      alert(error.response?.data?.error || "Erro ao criar conta!");
    }
  };

  return (
    <div className="conta">
      <div className={styles.conta}>
        <h1 className={styles.tituloConta}>Crie aqui sua conta</h1>
        <section className={styles.secaoForm}>
          <div className={styles.formInscricao}>
            <div className={styles.Formtitulo}>
              <h2 className={styles.tituloForm}>Crie sua conta!</h2>
              <form onSubmit={handleSubmit}>
                <div className={styles.divForm}>
                  <p className={styles.paragrafoForm}><b>Nome:</b></p>
                  <input
                    type="text"
                    name="nome_usuario"
                    value={formData.nome_usuario}
                    onChange={handleChange}
                    className={styles.inputsForm}
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div className={styles.divForm}>
                  <p className={styles.paragrafoForm}><b>Email:</b></p>
                  <input
                    type="email"
                    name="email_usuario"
                    value={formData.email_usuario}
                    onChange={handleChange}
                    className={styles.inputsForm}
                    placeholder="seuemail@gmail.com"
                    required
                  />
                </div>
                <div className={styles.divForm}>
                  <p className={styles.paragrafoForm}><b>Senha:</b></p>
                  <input
                    type="password"
                    name="senha_usuario"
                    value={formData.senha_usuario}
                    onChange={handleChange}
                    className={styles.inputsForm}
                    placeholder="Sua senha"
                    required
                  />
                </div>
                <div className={styles.divForm}>
                  <p className={styles.paragrafoForm}><b>Confirme sua senha:</b></p>
                  <input
                    type="password"
                    name="confirmarSenha"
                    value={formData.confirmarSenha}
                    onChange={handleChange}
                    className={styles.inputsForm}
                    placeholder="Confirme sua senha"
                    required
                  />
                </div>
                <br />
                <button type="submit" className={styles.botaoForm}>ENVIAR</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CriarConta;
