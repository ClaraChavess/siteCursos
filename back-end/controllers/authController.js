import prisma from "../prisma/client.js";

export const criarConta = async (req, res) => {
  try {
    const { nome_usuario, email_usuario, senha_usuario } = req.body;

    // Verifica se o e-mail já está cadastrado
    const usuarioExistente = await prisma.criarConta.findUnique({
      where: { email_usuario },
    });

    if (usuarioExistente) {
      return res.status(400).json({ error: "E-mail já cadastrado!" });
    }

    // Salva no banco
    const novoUsuario = await prisma.criarConta.create({
      data: { nome_usuario, email_usuario, senha_usuario },
    });

    res.status(201).json({ message: "Usuário criado com sucesso!", usuario: novoUsuario });
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar conta!" });
  }
};
