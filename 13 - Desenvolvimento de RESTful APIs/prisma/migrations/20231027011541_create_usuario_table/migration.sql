/*
  Warnings:

  - You are about to alter the column `preco` on the `produtos` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal`.

*/
-- AlterTable
ALTER TABLE `produtos` MODIFY `preco` DECIMAL NOT NULL;

-- CreateTable
CREATE TABLE `usuarios` (
    `id` CHAR(40) NOT NULL,
    `cpf` CHAR(11) NOT NULL,
    `nome` VARCHAR(100) NOT NULL,
    `sobrenome` VARCHAR(100) NOT NULL,
    `endereco` VARCHAR(200) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `usuarios_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
