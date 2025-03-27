import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from './MeusCursos.module.css';

function MeusCursos() {
  const [userName, setUserName] = useState("");
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const handleStorageChange = () => {
      setUserName(localStorage.getItem("nome_usuario") || "");
      setCursos(JSON.parse(localStorage.getItem("cursosInscritos")) || []);
    };

    handleStorageChange();

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("nome_usuario");
    localStorage.removeItem("cursosInscritos");
    setUserName("");
    setCursos([]);
    window.dispatchEvent(new Event("storage"));
  };

  const removerCurso = (cursoId) => {
    const cursosAtualizados = cursos.filter(curso => curso.id !== cursoId);
    setCursos(cursosAtualizados);
    localStorage.setItem("cursosInscritos", JSON.stringify(cursosAtualizados));
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.tituloCurso}>Visualize seus cursos aqui</h1>
      <h2 className={styles.nomeUser}>Olá, {userName || "visitante"}</h2>

      {cursos.length > 0 ? (
        <table className={styles.tabelaCursos}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome do Curso</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {cursos.map((curso, index) => (
              <tr key={index}>
                <td>{curso.id}</td>
                <td>{curso.nome}</td>
                <td>
                  <button onClick={() => removerCurso(curso.id)} className={styles.botaoRemover}>
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <>
          <p className={styles.mensagemNenhumCurso}>Você ainda não está inscrito em nenhum curso.</p>
          <Link to="/" className={styles.botaoVoltar}>
            <button className={styles.botaoHome}>Voltar para Home</button>
          </Link>
        </>
      )}

      {userName && (
        <button onClick={handleLogout} className={styles.botaoSair}>Logout</button>
      )}
    </div>
  );
}

export default MeusCursos;
