import React, { useEffect, useState } from "react";

function MeusCursos() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Verifica se existe o nome do usuário no localStorage
    const storedUserName = localStorage.getItem("nome_usuario");
    if (storedUserName) {
      setUserName(storedUserName); // Se sim, exibe o nome
    } else {
      setUserName(""); // Se não, exibe "visitante"
    }
  }, []);

  const handleLogout = () => {
    // Remove o nome do usuário do localStorage ao fazer logout
    localStorage.removeItem("nome_usuario");
    setUserName(""); // Atualiza o estado para "visitante"
  };

  return (
    <div className="Cursos">
      <h1>Visualize seus cursos aqui</h1>
      <h2>Olá, {userName || "visitante"}</h2>
      {/* Aqui você pode adicionar a lista de cursos */}
      {userName && (
        <button onClick={handleLogout}>Logout</button> // Botão de logout
      )}
    </div>
  );
}

export default MeusCursos;
