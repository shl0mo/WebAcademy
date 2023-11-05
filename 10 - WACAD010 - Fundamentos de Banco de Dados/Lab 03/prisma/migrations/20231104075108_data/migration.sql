/*
  Warnings:

  - You are about to alter the column `desconto` on the `compra` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal`.
  - You are about to alter the column `total_compra` on the `compra` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal`.
  - You are about to alter the column `preco_base` on the `produto` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal`.

*/
-- AlterTable
ALTER TABLE `compra` MODIFY `desconto` DECIMAL NOT NULL,
    MODIFY `total_compra` DECIMAL NOT NULL;

-- AlterTable
ALTER TABLE `consumidor` MODIFY `data_nascimento` VARCHAR(10) NOT NULL;

-- AlterTable
ALTER TABLE `produto` MODIFY `preco_base` DECIMAL NOT NULL;
