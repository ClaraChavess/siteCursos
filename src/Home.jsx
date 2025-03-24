import React from "react";
import { Link } from "react-router-dom";
import './Home.module.css';
import styles from './Home.module.css';

function Home(){
    return(
<div class="home">
    <Link to='/'></Link>
    <main>
        <aside>
            <h2>Descubra nossos </h2>
            <h2 className={styles.curso}>CURSOS</h2>
            <button className={styles.buttonMain}>Clique aqui</button>

            <ul>
                <li className={styles.listaRedes}>
                    
                        <img className={styles.redes} src="imagens/insta.png" alt="Instagram"></img>
                    
                </li>
                <li className={styles.listaRedes}><img className={styles.redes} src="imagens/tiktok.png" alt="TikTok"></img></li>
                <li className={styles.listaRedes}><img className={styles.redes} src="imagens/face.png" alt="Facebook"></img></li>
            </ul>
        </aside>
        <article> 
            <img className={styles.menina} src="imagens/garota.png" alt="garota no note"></img>
        </article>
    </main>
    
    
</div>
    
)
}

export default Home;
