-- MySQL dump 10.13  Distrib 5.7.33, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: dados211d
-- ------------------------------------------------------
-- Server version	5.7.33-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `moradorproprietario`
--

DROP TABLE IF EXISTS `moradorproprietario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `moradorproprietario` (
  `mor_codigo` int(11) NOT NULL AUTO_INCREMENT,
  `mor_nome` varchar(30) DEFAULT NULL,
  `mor_apelido` varchar(10) DEFAULT NULL,
  `mor_celular` varchar(15) DEFAULT NULL,
  `mor_cpf` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`mor_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `moradorproprietario`
--

LOCK TABLES `moradorproprietario` WRITE;
/*!40000 ALTER TABLE `moradorproprietario` DISABLE KEYS */;
INSERT INTO `moradorproprietario` VALUES (1,'Luiza Jennifer dos Reis','Lu','(16) 99231-6842','143.281.941-12'),(2,'Vinícius Ruan Aparecido','Viní','(16) 99967-1440','346.994.325-49'),(3,'Nicole Emily Sales','Nick','(16) 99722-3040','338.501.506-23');
/*!40000 ALTER TABLE `moradorproprietario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apartamento`
--

DROP TABLE IF EXISTS `apartamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `apartamento` (
  `apt_codigo` int(11) NOT NULL AUTO_INCREMENT,
  `apt_inativarativar` varchar(2) NOT NULL,
  `apt_edificio` varchar(20) DEFAULT NULL,
  `apt_numero` int(10) DEFAULT NULL,
  `apt_andar` int(2) DEFAULT NULL,
  `apt_quartos` int(2) DEFAULT NULL,
  `mor_codigo` int(11) NOT NULL,
  PRIMARY KEY (`apt_codigo`),
  KEY `fk_apartamento_moradorproprietario_idx` (`mor_codigo`),
  CONSTRAINT `fk_apartamento_moradorproprietario` FOREIGN KEY (`mor_codigo`) REFERENCES `moradorproprietario` (`mor_codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apartamento`
--

LOCK TABLES `apartamento` WRITE;
/*!40000 ALTER TABLE `editoras` DISABLE KEYS */;
INSERT INTO `apartamento` VALUES (1,'I','BLOCO 22',230,2,2,2),(2,'I','BLOCO 20',210,3,2,1),(3,'A','BLOCO 21',200,1,2,3);
/*!40000 ALTER TABLE `editoras` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Dumping routines for database 'dados211d'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-26 14:35:52