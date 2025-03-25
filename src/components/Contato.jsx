import React from "react";
import styles from './Contato.module.css';
import './Contato.module.css'


function Contato(){
    return(
<div class="contato">

<main className={styles.FormContato}>
    
    <section className={styles.InfoContato}>
    <div className={styles.infoContato}>
            <h2 className={styles.tituloCont}>Contato</h2>
            <p className={styles.paragrafoCont}>Estamos ansiosos para ouvir você! Entre em contato conosco através dos detalhes abaixo ou envie-nos uma<br></br> mensagem  diretamente pelo formulário.</p></div>
            
            <div className={styles.endereco}>
                <p className={styles.paragrafoCont}><strong>Endereço:</strong> 738 Av. Beira Mar, Fortaleza, CE</p>
                <p className={styles.paragrafoCont}><strong>Telefone:</strong> (85) 1234-5678</p>
                <p className={styles.paragrafoCont}><strong>Email:</strong> contato@cursos.info.com</p>
            </div>
    </section>
    
    <section className={styles.formCont}>
        <div className={styles.divForm}>
            <form className={styles.formContato}>
                <div className={styles.form}>
                    <h3 className={styles.tituloForm}><strong>Ou entre em contato pelo formulário</strong></h3>
                        <label htmlFor="nome">Nome:</label><br></br>
                        <input type="text" id='nome' name='nome' required/>
        </div>
                <div className={styles.form}>
                        <label htmlFor="email">Email:</label><br></br>
                        <input type="email" id='email' name='email' required/>
                </div>
                    <div className={styles.form}>
                        <label htmlFor="email">Mensagem:</label><br></br>
                        <textarea name="mensagem" id="mensagem" rows="5"></textarea>
                    </div> 
                        <button type="submit" className={styles.botaoContato}>Enviar Mensagem</button>     
                    </form></div>
    </section>

</main>
    
</div>
    
)
}

export default Contato;
