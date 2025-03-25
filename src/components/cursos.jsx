import React from "react";
import { Link } from "react-router-dom";
import styles from './cursos.module.css';

import Design from './imagens/design.png';


function Cursos(){
    return(
<div class="Cursos">
    <Link to ='/cursos'>
    </Link>
    
    <section class="section1" id="cursinhos">
        <div className={styles.cursos}>
            <img src="imagens/programaweb.png" alt="" className={styles.imagemCursos}></img>
            <h3 className={styles.tituloCursos}>Programação web</h3>
            <p className={styles.descricaoCursos}>
                Você desenvolverá sites de alta qualidade, utilizando linguagens de marcação como HTML e as estilizando com CSS, além de animações e interações com liguagens diversas, como: JavaScript, TypeScript, etc.</p>
                
                <a href="web.html" target="_blank"><h5>Saiba mais</h5></a>
        </div>
        <div className={styles.cursos}>
            <img  alt="" className={styles.imagemCursos}></img>
            <h3 className={styles.tituloCursos}>Design</h3>
            <p  className={styles.descricaoCursos}>No curso de Design, você aprenderá a criar soluções visuais incríveis, dominando ferramentas e técnicas de design gráfico, web e UX. Perfeito para quem quer transformar ideias em experiências visuais!</p>
            
            <a href="design.html" target="_blank"><h5>Saiba mais</h5></a>
        </div>
        <div className={styles.cursos}>
            <img src={styles.Design} alt=""  className={styles.imagemCursos}></img>
            <h3 className={styles.tituloCursos}>Redes de computadores</h3>
            <p  className={styles.descricaoCursos}>Aprenda a configurar e gerenciar redes, dominando protocolos e segurança. Ideal para quem quer atuar na infraestrutura de TI!</p>
            
            <a href="redes.html" target="_blank"><h5>Saiba mais</h5></a>
        </div>
    </section>

</div>
    
)
}

export default Cursos;
