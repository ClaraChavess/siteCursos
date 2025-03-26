import React from "react";
import styles from './CriarConta.module.css';
import './CriarConta.module.css';


function CriarConta(){
    return(
<div class="conta">
    <h1>Crie aqui sua conta</h1>
    <section className={styles.secaoForm}>
                <div className={styles.formInscricao}>
                    <h2 className={styles.tituloForm}>Formulário de inscrição</h2>
                    <form>
                        <p className={styles.paragrafoForm}><b>Email</b></p>
                        <input type="email" name="email" id="email" className={styles.inputsForm} placeholder="seuemail@gmail.com" />
                        <br />
                        <span id="erroemail"></span>
                        <p className={styles.paragrafoForm}><b>Senha</b></p>
                        <input type="password" name="senha" id="senha" className={styles.inputsForm} placeholder="Sua senha" />
                        <br />
                        <span id="errosenha"></span>
                        <p className={styles.paragrafoForm}><b>Modalidade</b></p>
                        <select id="modalidade" className={styles.inputsForm}>
                            <option value="Presencial">Presencial</option>
                            <option value="EAD">Ensino a distancia</option>
                        </select>
                        <br />
                        <button type="submit" className={styles.botaoForm}>ENVIAR</button>
                    </form>
                </div>
            </section>
     
</div>
    
)
}

export default CriarConta;
