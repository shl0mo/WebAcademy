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
ALTER TABLE `produto` MODIFY `preco_base` DECIMAL NOT NULL;

-- CreateIndex
CREATE INDEX `compra_produto_endereco_id_compra_codigo_barras_produto_cpf__idx` ON `compra_produto_endereco`(`id_compra`, `codigo_barras_produto`, `cpf_consumidor`);

-- CreateIndex
CREATE INDEX `consumidor_endereco_cpf_consumidor_id_endereco_idx` ON `consumidor_endereco`(`cpf_consumidor`, `id_endereco`);

-- CreateIndex
CREATE INDEX `modelo_id_numero_serie_idx` ON `modelo`(`id_numero_serie`);

-- CreateIndex
CREATE INDEX `produto_id_modelo_idx` ON `produto`(`id_modelo`);

-- AddForeignKey
ALTER TABLE `consumidor_endereco` ADD CONSTRAINT `consumidor_endereco_cpf_consumidor_fkey` FOREIGN KEY (`cpf_consumidor`) REFERENCES `consumidor`(`cpf`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `consumidor_endereco` ADD CONSTRAINT `consumidor_endereco_id_endereco_fkey` FOREIGN KEY (`id_endereco`) REFERENCES `endereco`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produto` ADD CONSTRAINT `produto_id_modelo_fkey` FOREIGN KEY (`id_modelo`) REFERENCES `modelo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `modelo` ADD CONSTRAINT `modelo_id_numero_serie_fkey` FOREIGN KEY (`id_numero_serie`) REFERENCES `numero_serie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compra_produto_endereco` ADD CONSTRAINT `compra_produto_endereco_id_compra_fkey` FOREIGN KEY (`id_compra`) REFERENCES `compra`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compra_produto_endereco` ADD CONSTRAINT `compra_produto_endereco_codigo_barras_produto_fkey` FOREIGN KEY (`codigo_barras_produto`) REFERENCES `produto`(`codigo_barras`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compra_produto_endereco` ADD CONSTRAINT `compra_produto_endereco_cpf_consumidor_fkey` FOREIGN KEY (`cpf_consumidor`) REFERENCES `consumidor`(`cpf`) ON DELETE RESTRICT ON UPDATE CASCADE;
