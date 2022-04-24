-- Banco de dados desse capítulo do curso.

CREATE DATABASE IF NOT EXISTS `cursojava` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `cursojava`;

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
-- Table structure for table `cidades`
--

DROP TABLE IF EXISTS `cidades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cidades` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `estado_id` int unsigned NOT NULL,
  `area` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `estado_id` (`estado_id`),
  CONSTRAINT `cidades_ibfk_1` FOREIGN KEY (`estado_id`) REFERENCES `estados` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cidades`
--

LOCK TABLES `cidades` WRITE;
/*!40000 ALTER TABLE `cidades` DISABLE KEYS */;
INSERT INTO `cidades` VALUES (1,'Campinas',26,795.00),(2,'Niterói',26,133.90),(3,'Caruaru',18,920.60),(4,'Juazeiro do Norte',7,248.20);
/*!40000 ALTER TABLE `cidades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empresas`
--

DROP TABLE IF EXISTS `empresas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empresas` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `cnpj` varchar(14) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cnpj` (`cnpj`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresas`
--

LOCK TABLES `empresas` WRITE;
/*!40000 ALTER TABLE `empresas` DISABLE KEYS */;
INSERT INTO `empresas` VALUES (1,'Bradesco','83923508000199'),(2,'Vale','19556398000175'),(3,'Cielo','06826945000143');
/*!40000 ALTER TABLE `empresas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empresas_unidades`
--

DROP TABLE IF EXISTS `empresas_unidades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empresas_unidades` (
  `empresa_id` int unsigned NOT NULL,
  `cidade_id` int unsigned NOT NULL,
  `sede` tinyint(1) NOT NULL,
  PRIMARY KEY (`empresa_id`,`cidade_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresas_unidades`
--

LOCK TABLES `empresas_unidades` WRITE;
/*!40000 ALTER TABLE `empresas_unidades` DISABLE KEYS */;
INSERT INTO `empresas_unidades` VALUES (1,1,1),(1,2,0),(2,1,0),(2,2,1);
/*!40000 ALTER TABLE `empresas_unidades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estados`
--

DROP TABLE IF EXISTS `estados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estados` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `sigla` varchar(2) NOT NULL,
  `regiao` enum('Norte','Nordeste','Centro-Oeste','Sudeste','Sul') NOT NULL,
  `populacao` decimal(5,2) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nome` (`nome`),
  UNIQUE KEY `sigla` (`sigla`)
) ENGINE=InnoDB AUTO_INCREMENT=1002 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estados`
--

LOCK TABLES `estados` WRITE;
/*!40000 ALTER TABLE `estados` DISABLE KEYS */;
INSERT INTO `estados` VALUES (1,'Acre','AC','Norte',0.83),(3,'Alagoas','AL','Nordeste',3.38),(4,'Amapá','AP','Norte',0.80),(5,'Amazonas','AM','Norte',4.06),(6,'Bahia','BA','Nordeste',15.34),(7,'Ceará','CE','Nordeste',9.02),(8,'Distrito Federal','DF','Centro-Oeste',3.04),(9,'Espírito Santo','ES','Sudeste',4.02),(10,'Goiás','GO','Centro-Oeste',6.78),(11,'Maranhão','MA','Nordeste',7.00),(12,'Mato Grosso','MT','Centro-Oeste',3.34),(13,'Mato Grosso do Sul','MS','Centro-Oeste',2.71),(14,'Minas Gerais','MG','Sudeste',21.12),(15,'Pará','PA','Norte',8.36),(16,'Paraíba','PB','Nordeste',4.03),(17,'Paraná','PR','Sul',11.32),(18,'Pernambuco','PE','Nordeste',9.47),(19,'Piauí','PI','Nordeste',3.22),(20,'Rio de Janeiro','RJ','Sudeste',16.72),(21,'Rio Grande do Norte','RN','Nordeste',3.51),(22,'Rio Grande do Sul','RS','Sul',11.32),(23,'Rondônia','RO','Norte',1.81),(24,'Roraima','RR','Norte',0.52),(25,'Santa Catarina','SC','Sul',7.01),(26,'São Paulo','SP','Sudeste',45.10),(27,'Sergipe','SE','Nordeste',2.29),(28,'Tocantins','TO','Norte',1.55);
/*!40000 ALTER TABLE `estados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prefeitos`
--

DROP TABLE IF EXISTS `prefeitos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prefeitos` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `cidade_id` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cidade_id` (`cidade_id`),
  CONSTRAINT `prefeitos_ibfk_1` FOREIGN KEY (`cidade_id`) REFERENCES `cidades` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prefeitos`
--

LOCK TABLES `prefeitos` WRITE;
/*!40000 ALTER TABLE `prefeitos` DISABLE KEYS */;
INSERT INTO `prefeitos` VALUES (1,'Rodrigo Neves',2),(2,'Raquel Lyra',3),(3,'Zenaldo Coutinho',NULL),(4,'Rafael Greca',NULL);
/*!40000 ALTER TABLE `prefeitos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'cursojava'
--

--
-- Dumping routines for database 'cursojava'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;