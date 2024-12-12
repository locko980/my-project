/*
  Warnings:

  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Client";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Livro" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "ano_publicacao" DATETIME NOT NULL,
    "genero" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Livro_titulo_key" ON "Livro"("titulo");

-- CreateIndex
CREATE UNIQUE INDEX "Livro_ano_publicacao_key" ON "Livro"("ano_publicacao");
