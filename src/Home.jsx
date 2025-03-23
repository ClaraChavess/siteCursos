import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
<div class="home">
    <Link to='/'>
    
    <main>
        <aside>
            <h2>Descubra nossos </h2>
            <h2 id="curso">CURSOS</h2>
           <a href="#cursinhos"><button>Clique aqui</button></a>

            <ul>
                <li >
                    <a href="http://www.instagram.com/dsistemas_cesarcampelo/" target="_blank">
                        <img class="redes"src="imagens/insta.png" alt="Instagram"></img>
                    </a>
                </li>
                <li ><img class="redes" src="imagens/tiktok.png" alt="TikTok"></img></li>
                <li ><img class="redes" src="imagens/face.png" alt="Facebook"></img></li>
            </ul>
        </aside>

        <article> 
            <img id="menina" src="imagens/garota.png" alt="garota no note"></img>
        </article>
    </main>
    </Link>
       
</div>
    
)
}

export default Home;
