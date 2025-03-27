const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET_KEY = process.env.JWT_SECRET || "chave-secreta";

app.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ message: "Usuário não encontrado" });

    const senhaCorreta = await bcrypt.compare(senha, user.senha);
    if (!senhaCorreta) return res.status(401).json({ message: "Senha incorreta" });

    const token = jwt.sign({ id: user.id, nome: user.nome, email: user.email }, SECRET_KEY, { expiresIn: "1h" });

    res.json({ token, user: { id: user.id, nome: user.nome, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: "Erro no servidor" });
  }
});