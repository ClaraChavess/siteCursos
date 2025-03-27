import React from "react";
import styles from './InscreverBotao.module.css';
import './InscreverBotao.module.css';

function InscreverBotao({ curso }) {
  const handleInscricao = () => {
    let cursosSalvos = JSON.parse(localStorage.getItem("cursosInscritos")) || [];

    // Verifica se o usuário já está inscrito no curso
    if (!cursosSalvos.some(c => c.id === curso.id)) {
      cursosSalvos.push(curso);
      localStorage.setItem("cursosInscritos", JSON.stringify(cursosSalvos));
      window.dispatchEvent(new Event("storage")); // Atualiza automaticamente "Meus Cursos"
      alert(`Inscrição no curso "${curso.nome}" realizada com sucesso!`);
    } else {
      alert("Você já está inscrito neste curso!");
    }
  };

  return( <button onClick={handleInscricao} className={styles.botaoInscricao}>Inscrever-se</button>)
}

export default InscreverBotao;
