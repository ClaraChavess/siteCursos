import React from "react";
import styles from './footer.module.css';
import './footer.module.css';


import Instagram from './imagens/insta.png';
import TikTok from './imagens/tiktok.png';
import Facebook from './imagens/face.png';

function Footer(){
    return(
        <footer>
        <h1 className={styles.tituloFooter}>
            Instituto Atlântico Avanti
        </h1>
        <hr className={styles.linhaFooter}></hr>
            <p className={styles.textoFooter}>
                Nós somos alunos do curso de FullStack do Instituto Atlântico.
            </p>     
            <ul className={styles.RedesSociais}>
                <li><i className="fa-brands fa-instagram"></i> Instagram</li>
                <li ><i className="fa-brands fa-linkedin"></i> LinkedIn</li>
                <li ><i className="fa-brands fa-facebook"></i> Facebook</li>
            </ul>         
          
            
        </footer>



    )

}

export default Footer;