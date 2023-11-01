-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema db_loja
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db_loja
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_loja` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin ;
USE `db_loja` ;

-- -----------------------------------------------------
-- Table `db_loja`.`consumidor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_loja`.`consumidor` (
  `cpf` VARCHAR(11) NOT NULL,
  `nome_completo` VARCHAR(200) NOT NULL,
  `data_nascimento` DATE NOT NULL,
  `celular` VARCHAR(20) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`cpf`),
  UNIQUE INDEX `cpf_UNIQUE` (`cpf` ASC) VISIBLE,
  UNIQUE INDEX `celular_UNIQUE` (`celular` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_loja`.`enredeco`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_loja`.`enredeco` (
  `id_enredeco` INT NOT NULL AUTO_INCREMENT,
  `enredeco` VARCHAR(300) NOT NULL,
  PRIMARY KEY (`id_enredeco`),
  UNIQUE INDEX `enredeco_UNIQUE` (`enredeco` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_loja`.`consumidor_endereco`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_loja`.`consumidor_endereco` (
  `cpf_consumidor` VARCHAR(11) NOT NULL,
  `id_enredeco` INT NOT NULL,
  UNIQUE INDEX `cpf_consumidor_UNIQUE` (`cpf_consumidor` ASC) VISIBLE,
  UNIQUE INDEX `id_enredeco_UNIQUE` (`id_enredeco` ASC) VISIBLE,
  CONSTRAINT `fk_consumidor_endereco`
    FOREIGN KEY (`cpf_consumidor`)
    REFERENCES `db_loja`.`consumidor` (`cpf`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_endereco`
    FOREIGN KEY (`id_enredeco`)
    REFERENCES `db_loja`.`enredeco` (`id_enredeco`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_loja`.`numero_serie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_loja`.`numero_serie` (
  `id` INT NOT NULL,
  `numero_serie` VARCHAR(9) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `numero_serie_UNIQUE` (`numero_serie` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_loja`.`modelo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_loja`.`modelo` (
  `id` INT NOT NULL,
  `id_numero_serie` INT NOT NULL,
  `modelo` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_modelo_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `id_numero_serie_UNIQUE` (`id_numero_serie` ASC) VISIBLE,
  CONSTRAINT `fk_numero_serie`
    FOREIGN KEY (`id_numero_serie`)
    REFERENCES `db_loja`.`numero_serie` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_loja`.`produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_loja`.`produto` (
  `codigo_barras` VARCHAR(13) NOT NULL,
  `categoria` VARCHAR(100) NOT NULL,
  `subcategoria` VARCHAR(100) NOT NULL,
  `id_modelo` INT NOT NULL,
  `fabricante` VARCHAR(100) NOT NULL,
  `preco_base` DOUBLE NOT NULL,
  `quantidade_disponivel` INT NOT NULL,
  PRIMARY KEY (`codigo_barras`),
  UNIQUE INDEX `codigo_barras_UNIQUE` (`codigo_barras` ASC) VISIBLE,
  UNIQUE INDEX `id_modelo_UNIQUE` (`id_modelo` ASC) VISIBLE,
  CONSTRAINT `fk_modelo`
    FOREIGN KEY (`id_modelo`)
    REFERENCES `db_loja`.`modelo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_loja`.`compra`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_loja`.`compra` (
  `id` INT NOT NULL,
  `data` DATE NOT NULL,
  `hora` VARCHAR(20) NOT NULL,
  `desconto` DOUBLE NULL,
  `forma_pagamento` VARCHAR(50) NOT NULL,
  `total_compra` DOUBLE NOT NULL,
  `endereco_envio` VARCHAR(300) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_loja`.`compra_produto_consumidor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_loja`.`compra_produto_consumidor` (
  `id_compra` INT NOT NULL,
  `codigo_barras_produto` VARCHAR(45) NOT NULL,
  `cpf_consumidor_compra` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_compra`),
  INDEX `fk_produto_idx` (`codigo_barras_produto` ASC) VISIBLE,
  INDEX `fk_consumidor_idx` (`cpf_consumidor_compra` ASC) VISIBLE,
  CONSTRAINT `fk_compra`
    FOREIGN KEY (`id_compra`)
    REFERENCES `db_loja`.`compra` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_produto`
    FOREIGN KEY (`codigo_barras_produto`)
    REFERENCES `db_loja`.`produto` (`codigo_barras`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_consumidor_compra`
    FOREIGN KEY (`cpf_consumidor_compra`)
    REFERENCES `db_loja`.`consumidor` (`cpf`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
