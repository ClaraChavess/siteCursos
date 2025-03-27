import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from './header.module.css';

function Header() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const handleStorageChange = () => {
      setUserName(localStorage.getItem("nome_usuario") || "");
    };

    handleStorageChange();

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("nome_usuario");
    localStorage.removeItem("cursosInscritos");
    setUserName("");
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <header className={styles.navegacao}>
      <div className={styles.header}>
        <Link to='/' className={styles.logo}><h1>INFORMÁTICA</h1></Link>
      </div>

      <div className={styles.listaNavegacao}>
        <ul>
          <Link to='/meus-cursos'>
            <li className={styles.link}>Meus Cursos</li>
          </Link>
          <Link to="/sobre-nos">
            <li className={styles.link}>Sobre nós</li>
          </Link>
          <Link to='/contato'>
            <li className={styles.link}>Contato</li>
          </Link>
          {userName ? (
            <button onClick={handleLogout} className={styles.botao_CriarConta}>Logout</button>
          ) : (
            <Link to='/criar-conta'>
              <button className={styles.botao_CriarConta}>Criar uma conta</button>
            </Link>
          )}
        </ul>
      </div>
    </header>
  );
}

export default Header;
