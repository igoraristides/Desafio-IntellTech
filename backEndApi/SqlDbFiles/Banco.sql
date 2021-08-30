CREATE DATABASE  IF NOT EXISTS `desafiointell` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `desafiointell`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: desafiointell
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `diretorios`
--

DROP TABLE IF EXISTS `diretorios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `diretorios` (
  `idDiretorio` char(38) NOT NULL,
  `nome` varchar(45) NOT NULL,
  PRIMARY KEY (`idDiretorio`),
  UNIQUE KEY `idDiretorio_UNIQUE` (`idDiretorio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diretorios`
--

LOCK TABLES `diretorios` WRITE;
/*!40000 ALTER TABLE `diretorios` DISABLE KEYS */;
INSERT INTO `diretorios` VALUES ('249ffbc4-edcc-45e5-b439-1874b4b4c55f','Retângulos'),('9447b769-f783-4ffe-a565-6ed9ca106938','Triângulos'),('b57317b0-3182-487a-90d7-85691c62586e','Círculos'),('ce71961d-d593-46aa-86f9-07d89d12eabf','Quadrados');
/*!40000 ALTER TABLE `diretorios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `formasgeometricas`
--

DROP TABLE IF EXISTS `formasgeometricas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `formasgeometricas` (
  `idFormasGeometricas` char(38) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `tipo` enum('Trapézio','Quadrado','Triângulo','Retângulo','Losango','Paralelogramo','Círculo') NOT NULL,
  `cor` varchar(45) NOT NULL,
  `tamPixels` int NOT NULL,
  `id_diretorio` char(38) NOT NULL,
  PRIMARY KEY (`idFormasGeometricas`),
  UNIQUE KEY `idFormasGeometricas_UNIQUE` (`idFormasGeometricas`),
  KEY `fk_formasGeometricas_diretorios_idx` (`id_diretorio`),
  CONSTRAINT `fk_formasGeometricas_diretorios` FOREIGN KEY (`id_diretorio`) REFERENCES `diretorios` (`idDiretorio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `formasgeometricas`
--

LOCK TABLES `formasgeometricas` WRITE;
/*!40000 ALTER TABLE `formasgeometricas` DISABLE KEYS */;
INSERT INTO `formasgeometricas` VALUES ('1b2427e8-6b3b-44d9-9df2-5c5845051f9e','Triângulo Isósceles','Triângulo','Preto',150,'9447b769-f783-4ffe-a565-6ed9ca106938'),('455ccd8f-cdca-4950-884c-db617d03e74b','Círculo 01','Círculo','Vermelho',200,'b57317b0-3182-487a-90d7-85691c62586e'),('57c4816b-87b0-4622-8a9c-950b58860def','Triângulo Escaleno','Triângulo','Laranja',200,'9447b769-f783-4ffe-a565-6ed9ca106938'),('7b14f66c-086d-4e74-9efb-ac3e80c2d025','Quadrado 02','Quadrado','Laranja',200,'ce71961d-d593-46aa-86f9-07d89d12eabf'),('e6a00145-6461-4f63-a467-60398db3b15b','Quadrado 01','Quadrado','Preto',200,'ce71961d-d593-46aa-86f9-07d89d12eabf');
/*!40000 ALTER TABLE `formasgeometricas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'desafiointell'
--

--
-- Dumping routines for database 'desafiointell'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-30 11:12:43
