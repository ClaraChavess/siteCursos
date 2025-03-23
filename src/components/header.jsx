import React from "react";
import { Link } from "react-router-dom";
import './header.module.css';
import styles from './header.module.css';

function Header(){
    return(
<header className={styles.navegacao}>
        <div className={styles.header}>
            <Link to='/'className={styles.logo}><h1>INFORMÁTICA</h1></Link>
        </div>
            <ul>
                <Link to='/meus-cursos'><li className={styles.link}>Meus Cursos</li></Link>
                <Link to="/sobre-nos"><li className={styles.link}>Sobre nós</li></Link>
                <Link to='/contato'><li className={styles.link}>Contato</li></Link>
                <Link to='/criar-conta'><li className={styles.link}><button className={styles.botao_CriarConta}>Criar uma conta</button></li></Link>
            </ul>
    </header>
    )
}

export default Header;
