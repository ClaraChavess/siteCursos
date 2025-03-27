const express = require("express");
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Rota para listar cursos
app.get("/cursos", async (req, res) => {
  const cursos = await prisma.curso.findMany();
  res.json(cursos);
});

// Rota para criar curso
app.post("/cursos", async (req, res) => {
  const { nome, descricao } = req.body;
  const novoCurso = await prisma.curso.create({
    data: { nome, descricao },
  });
  res.json(novoCurso);
});

// Iniciar servidor
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
