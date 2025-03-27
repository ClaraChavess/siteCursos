import React from "react";
import './design.module.css';
import styles from './design.module.css';



import detalhe1 from './imagens/detalhe1.png';
import designer from './imagens/Designer(2).png';
import figma from './imagens/FIGMA.png';
import detalhe2 from './imagens/detalhe2.png';
import detalhe3 from './imagens/detalhe3.png';

function design(){
    return(
        <div class="design">
            <div className={styles.detalhe1}>
                <img src={detalhe1} alt="Detalhe 1" className={styles.fotoDetalhe1} />
            </div>
        
            <section className={styles.secaoDesign}>
                       <div className={styles.titulos}>
                            <h1 className={styles.titulo_design}>DESIGN</h1>
                            <h2 className={styles.subtitulo}>Explore sua criatividade</h2>
                            <hr className={styles.linha_design}/>
                                <p className={styles.conteudo_sobre_design}>Um designer é alguém que trabalha na criação e concepção de soluções visuais para uma variedade de propósitos e contextos. Isso pode incluir design gráfico, design de produto, design de interação, design de experiência do usuário (UX), design de interface do usuário (UI), entre outros campos.</p>
                       </div>
                       <div className={styles.imagem_referencia}>
                            <img src={designer} alt="Designer" className={styles.designer} />    
                       </div>
            </section>

            <section className={styles.secaoDesign}>
                <div className={styles.titulos}>
                        <h1 className={styles.titulo_design}>FIGMA</h1>
                        <p className={styles.conteudo_sobre_figma}>Nessa disciplina, iremos trabalha-lá com a plataforma Figma. Será aprendido a fazer telas para smartphones, desktops e derivados. Telas responsivas que variam de dispositivos e suas respectivas proporções. Já pensou o quão íncrivel seria ficar no conforto de sua residência fazendo telas para diferentes empresas e perfis?</p>

                        <div className={styles.botao}>
                            <a href="https://www.figma.com/design/8L4GM19HslpRsJbMuZyyGW/Untitled?node-id=6-23&node-type=frame&t=ay0dEaGrJEu93ctG-0"><input type="button" value="FIGMA" className={styles.botao_para_figma}/>
                            </a>
                        </div>
                        <div className={styles.detalhe3}>
                            <img src={detalhe3} className={styles.foto_detalhe3}></img>           
                        </div>
                    </div>
                        
                        <div className={styles.titulo}> <div className={styles.detalhe2}>
                            <img src={detalhe2} className={styles.foto_detalhe2}></img>
                        </div>
                            <div className={styles.imagem_referencia2}>
                                <img src={figma} id="figmer"></img>
                        </div>
                       
                    </div>
            
            </section>

            <section className={styles.secaoDesign}>
            <div className={styles.titulos2}>
                        <h1 className={styles.titulo_design}>CONHECA NOSSA PLATAFORMA</h1>
                    </div>
            </section>
            <div className={styles.painel_video}>
                        <div className={styles.video}>
                            <iframe width="95%" height="95%" src="https://www.youtube.com/embed/uan_tk6j_rg?si=yubzokcI7LL-hneL" title="YouTube video" allowFullScreen></iframe>
                        </div>
                    </div>


        </div>
    )
}
export default design;