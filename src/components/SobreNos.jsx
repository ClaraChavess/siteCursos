import React from "react";
import styles from './SobreNos.module.css';
import './SobreNos.module.css';

import VetorTech from './imagens/tecnologiaVetor.jpg';

function SobreNos(){
    return(
<div class="conteudo">
    <h1 className={styles.tituloSobre}>Sobre nós</h1>
    <section className={styles.secaoSobre}>
        <div className={styles.imagemSobre}>
            <img src={VetorTech} className={styles.imagemTecnologia} alt=""/>
        </div>
    
        <div className={styles.textoSobre}>
            <p className={styles.paragrafoSobre}>
            Somos apaixonados por tecnologia e comprometidos em capacitar pessoas de todas as idades e níveis de conhecimento a explorarem o universo da informática de maneira prática e acessível.

            Nosso objetivo é transformar o aprendizado em uma experiência leve, envolvente e eficaz. Oferecemos cursos que abrangem desde os fundamentos da computação até habilidades avançadas, sempre acompanhando as tendências do mercado e as inovações tecnológicas.</p>
        </div>
        
      </section> 
      </div>
        
    
)
}

export default SobreNos;
