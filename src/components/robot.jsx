import React from "react";
import './robot.module.css';
import styles from './robot.module.css';

// Imagens:
import Codigo2 from './imagens/codigo2.png';
import Basquete from './imagens/basquete.png';
import Robozin from './imagens/robozin.png';



function robot() {
    return (
        <div>
            <main>
                <div className={styles.conteudo}>
                    <h1 className={styles.titulo}>ROBÓTICA</h1>
                    <p className={styles.para1}>
                        A robótica é uma área de estudo e desenvolvimento que combina conhecimentos de diversas disciplinas, como a engenharia mecânica, a eletrônica e a computação, para criar robôs. Robôs são máquinas programáveis que podem realizar tarefas de forma autônoma ou semiautônoma, e podem ser controlados remotamente por humanos.
                    </p>
                    <hr />
                </div>
                <aside>
                    <img src="https://www.makerhero.com/wp-content/uploads/2017/07/1AC01-9-1-min-300x300.jpeg" alt="Robótica" />
                </aside>
            </main>
            <section>
                <div className={styles.conteudo2}>
                    <h2>ARDUINO</h2>
                    <p className={styles.para2}>
                        O Arduino é uma plataforma de prototipagem eletrônica que permite desenvolver projetos tecnológicos. Ele é constituído por hardware e software, e é considerado open-source, o que significa que a propriedade intelectual é compartilhada entre os usuários: <br />
                        <b>Hardware:</b> A placa do Arduino, que possui um microcontrolador, um tipo de processador menor do que o convencional. <br />
                        <b>Software:</b> A IDE Arduino, que é o ambiente de desenvolvimento dos projetos.
                    </p>
                    <hr />
                </div>
                <aside>
                    <img src={Codigo2} alt="Código Arduino" />
                </aside>
            </section>
            <section className={styles.projetos_section}>
                <div className={styles.div_imagem_grande}>
                    <img src={Basquete} alt="Projeto de basquete" className={styles.imagem_grande} />
                </div>
                <div className={styles.div_imagem_desc}>
                    <div className={styles.descricao}>
                        <h2>Projetos</h2>
                        <p className={styles.para3}>
                            Pequenos projetos desenvolvidos em aulas práticas do curso para você testar seus conhecimentos.
                        </p>
                        <hr />
                    </div>
                    <img src={Robozin} alt="Robô" id={styles.imagem_pequena} />
                </div>
            </section>

        </div>
    );
}
export default robot;