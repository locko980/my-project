/*
  Warnings:

  - You are about to alter the column `ano_publicacao` on the `Livro` table. The data in that column could be lost. The data in that column will be cast from `DateTime` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Livro" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "ano_publicacao" INTEGER NOT NULL,
    "genero" TEXT NOT NULL
);
INSERT INTO "new_Livro" ("ano_publicacao", "autor", "genero", "id", "titulo") SELECT "ano_publicacao", "autor", "genero", "id", "titulo" FROM "Livro";
DROP TABLE "Livro";
ALTER TABLE "new_Livro" RENAME TO "Livro";
CREATE UNIQUE INDEX "Livro_titulo_key" ON "Livro"("titulo");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
