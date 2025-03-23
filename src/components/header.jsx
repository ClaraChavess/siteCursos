import React from "react";
import { Link } from "react-router-dom";
import './header.module.css';
import styles from './header.module.css';

function Header(){
    return(
<header className={styles.navegacao}>
        <div>
            <Link to='/'><h1>INFORMÁTICA</h1></Link>
        </div>
            <ul>
                <Link to="/sobre-nos"><li className={styles.link}>Sobre nós</li></Link>
                <Link to='/contato'><li className={styles.link}>Contato</li></Link>
                <Link to='/criar-conta'><li className={styles.link}>Criar uma conta</li></Link>
            </ul>
    </header>
    )
}

export default Header;
