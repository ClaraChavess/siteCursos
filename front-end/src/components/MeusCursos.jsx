import React, { useEffect, useState } from "react";
import axios from "axios";

function MeusCursos() {
    const [nome_usuario, setUsuario] = useState(null);
    const [loading, setLoading] = useState(true); // Para controlar o carregamento
    const id_usuario = 1; // ID do usuário (pode vir de um login no futuro)

    useEffect(() => {
        // Buscar informações do usuário
        axios.get(`http://localhost:5000/usuarios/${id_usuario}`)
            .then(response => {
                setUsuario(response.data);
                setLoading(false); // Atualiza o estado de carregamento
            })
            .catch(error => {
                console.error("Erro ao buscar usuário:", error);
                setLoading(false); // Mesmo se houver erro, pare o carregamento
            });
    }, []); // O array vazio faz a requisição apenas uma vez, quando o componente for montado

    if (loading) {
        return <p>Carregando...</p>; // Exibe "Carregando..." enquanto a resposta não chega
    }

    return (
        <div className="Cursos">
            <h1>Visualize seus dados aqui</h1>
            <h2>Olá {nome_usuario ? nome_usuario.nome : "Visitante"}</h2> {/* Exibe o nome do usuário */}

            {/* Exibindo outras informações do usuário */}
            <div>
                <h3>Detalhes do usuário:</h3>
                <p>ID: {nome_usuario ? nome_usuario.id : "Desconhecido"}</p>
                <p>Email: {nome_usuario ? nome_usuario.email : "Desconhecido"}</p>
                {/* Adicione outros campos do usuário, se necessário */}
            </div>
        </div>
    );
}

export default MeusCursos;