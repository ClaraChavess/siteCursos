-- CreateTable
CREATE TABLE "CriarConta" (
    "id_usuario" SERIAL NOT NULL,
    "nome_usuario" VARCHAR(50) NOT NULL,
    "email_usuario" VARCHAR(150) NOT NULL,
    "senha_usuario" VARCHAR(220) NOT NULL,

    CONSTRAINT "CriarConta_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "Cursos" (
    "id_cursos" SERIAL NOT NULL,
    "nome_cursos" VARCHAR(100) NOT NULL,

    CONSTRAINT "Cursos_pkey" PRIMARY KEY ("id_cursos")
);

-- CreateTable
CREATE TABLE "UsuarioCursos" (
    "id_usuario" INTEGER NOT NULL,
    "id_cursos" INTEGER NOT NULL,

    CONSTRAINT "UsuarioCursos_pkey" PRIMARY KEY ("id_usuario","id_cursos")
);

-- CreateIndex
CREATE UNIQUE INDEX "CriarConta_email_usuario_key" ON "CriarConta"("email_usuario");

-- AddForeignKey
ALTER TABLE "UsuarioCursos" ADD CONSTRAINT "UsuarioCursos_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "CriarConta"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioCursos" ADD CONSTRAINT "UsuarioCursos_id_cursos_fkey" FOREIGN KEY ("id_cursos") REFERENCES "Cursos"("id_cursos") ON DELETE CASCADE ON UPDATE CASCADE;
