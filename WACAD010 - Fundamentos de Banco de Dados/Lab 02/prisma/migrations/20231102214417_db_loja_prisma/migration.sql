-- CreateTable
CREATE TABLE `consumidor` (
    `cpf` VARCHAR(11) NOT NULL,
    `nome_completo` VARCHAR(200) NOT NULL,
    `data_nascimento` DATE NOT NULL,
    `celular` VARCHAR(20) NOT NULL,
    `email` VARCHAR(45) NOT NULL,

    UNIQUE INDEX `consumidor_cpf_key`(`cpf`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `endereco` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `endereco` VARCHAR(300) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `consumidor_endereco` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cpf_consumidor` VARCHAR(191) NOT NULL,
    `id_endereco` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produto` (
    `codigo_barras` VARCHAR(13) NOT NULL,
    `categoria` VARCHAR(100) NOT NULL,
    `subcategoria` VARCHAR(100) NOT NULL,
    `fabricante` VARCHAR(100) NOT NULL,
    `preco_base` DECIMAL NOT NULL,
    `quantidade_disponivel` INTEGER NOT NULL,
    `id_modelo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`codigo_barras`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `modelo` (
    `id` VARCHAR(100) NOT NULL,
    `modelo` VARCHAR(100) NOT NULL,
    `id_numero_serie` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `numero_serie` (
    `id` VARCHAR(9) NOT NULL,
    `numero_serie` VARCHAR(9) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `compra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `hora` VARCHAR(20) NOT NULL,
    `desconto` DECIMAL NOT NULL,
    `forma_pagamento` VARCHAR(50) NOT NULL,
    `total_compra` DECIMAL NOT NULL,
    `endereco_envio` VARCHAR(300) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `compra_produto_endereco` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_compra` INTEGER NOT NULL,
    `codigo_barras_produto` VARCHAR(191) NOT NULL,
    `cpf_consumidor` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `compra_produto_endereco_id_compra_key`(`id_compra`),
    UNIQUE INDEX `compra_produto_endereco_codigo_barras_produto_key`(`codigo_barras_produto`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
