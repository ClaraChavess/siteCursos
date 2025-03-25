import React from "react";
import { Link } from "react-router-dom";
import styles from './cursos.module.css';

import design from './imagens/design.png'
import progWeb from './imagens/programaweb.png';
import Redes from './imagens/redesdecomp.png';
import poo from './imagens/poo.png';
import banco from './imagens/bancodados.png';
import robotica from './imagens/robotica.png';


function Cursos(){
    return(
<div class="Cursos">
    <Link to ='/cursos'>
    </Link>

    <section className={styles.secaoCursos} id="cursinhos">
        <div className={styles.cursos}>
            <img src={progWeb} alt="" className={styles.imagemCursos}></img>
            <h3 className={styles.tituloCursos}>Programação web</h3>
            <p className={styles.descricaoCursos}>
                Você desenvolverá sites de alta qualidade, utilizando linguagens de marcação como HTML e as estilizando com CSS, além de animações e interações com liguagens diversas, como: JavaScript, TypeScript, etc.</p>
                
                <Link to='/programacao-web'><button className={styles.botaoCursos}>Saiba mais</button></Link>
        </div>
        <div className={styles.cursos}>
            <img src={design} alt="" className={styles.imagemCursos}></img>
            <h3 className={styles.tituloCursos}>Design</h3>
            <p className={styles.descricaoCursos}>No curso de Design, você aprenderá a criar soluções visuais incríveis, dominando ferramentas e técnicas de design gráfico, web e UX. Perfeito para quem quer transformar ideias em experiências visuais!</p>
            
            <Link to='/design'><button className={styles.botaoCursos}>Saiba mais</button></Link>
        </div>
        <div className={styles.cursos}>
            <img src={Redes} alt=""  className={styles.imagemCursos}></img>
            <h3 className={styles.tituloCursos}>Redes de computadores</h3>
            <p  className={styles.descricaoCursos}>Aprenda a configurar e gerenciar redes, dominando protocolos e segurança. Ideal para quem quer atuar na infraestrutura de TI!</p>
            
           <Link to='/redes'><button className={styles.botaoCursos}>Saiba mais</button></Link>
        </div>
    </section>
    <section className={styles.secaoCursos}>
        <div className={styles.cursos}>
            <img src={poo} alt="" className={styles.imagemCursos}></img>
            <h3 className={styles.tituloCursos}>POO</h3>
            <p className={styles.descricaoCursos}>A programação orientada a objetos, se trata do desenvolvimento back-end, tratando de classes e objetos. Há diversas linguagens aprendidas, como: Java, phyton,
                PHP, C#, C++, Ruby e Object Pascal.</p>
            
            <Link to='/poo'><button className={styles.botaoCursos}>Saiba mais</button></Link>
        </div>
        <div className={styles.cursos}>
            <img src={robotica} alt="" className={styles.imagemCursos}></img>
            <h3 className={styles.tituloCursos}>Robótica</h3>
            <p className={styles.descricaoCursos}>Será aprendido a fazer circuitos e sistemas pequenos, utilizando diversos equipamentos para essa construção, como: Arduino, LEDS, resistores, sensores, cabos, etc. No final, será feito um pequeno projeto, referente a tudo aprendido.</p>
           
            <Link to='/robotica'><button className={styles.botaoCursos}>Saiba mais</button></Link>
        </div>
        <div className={styles.cursos}>
            <img src={banco} alt="" className={styles.imagemCursos}></img>
            <h3 className={styles.tituloCursos}>Banco de dados</h3>
            <p className={styles.descricaoCursos}>Aprenda a gerenciar e consultar dados com SQL e outras linguagens, dominando conceitos essenciais de banco de dados, como modelagem e segurança. Ideal para quem busca eficiência no trabalho com dados!</p>
            
            <Link to='banco-de-dados'><button className={styles.botaoCursos}>Saiba mais</button></Link>
        </div>
    </section>


</div>
    
)
}

export default Cursos;
