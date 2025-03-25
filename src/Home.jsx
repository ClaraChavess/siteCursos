import React from "react";
import { Link } from "react-router-dom";
import './Home.module.css';
import styles from './Home.module.css';
import Cursos from "./components/cursos";

import IconeMenina from './imagens/garota.png';
import Instagram from './imagens/insta.png';
import TikTok from './imagens/tiktok.png';
import Facebook from './imagens/face.png';


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
                    
                        <img className={styles.redes} src={Instagram} alt="Instagram"></img>
                    
                </li>
                <li className={styles.listaRedes}><img className={styles.redes} src={TikTok}alt="TikTok"></img></li>
                <li className={styles.listaRedes}><img className={styles.redes} src={Facebook} alt="Facebook"></img></li>
            </ul>
        </aside>
        <article> 
            <img className={styles.menina} src={IconeMenina} alt="garota com um notebook"></img>
        </article>
    </main>
    <Cursos></Cursos>
    
</div>
    
)
}

export default Home;
