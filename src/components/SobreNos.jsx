import React from "react";
import { Link } from "react-router-dom";

function SobreNos(){
    return(
<div class="conteudo">
    <Link to='sobre-nos'>
    <h1 class="titulo">Sobre nós</h1>
        <p>
        Somos apaixonados por tecnologia e comprometidos em capacitar pessoas de todas as idades e níveis de conhecimento a explorarem o universo da informática de maneira prática e acessível.

        Nosso objetivo é transformar o aprendizado em uma experiência leve, envolvente e eficaz. Oferecemos cursos que abrangem desde os fundamentos da computação até habilidades avançadas, sempre acompanhando as tendências do mercado e as inovações tecnológicas.</p>
       </Link> 
       </div>
        
    
)
}

export default SobreNos;
