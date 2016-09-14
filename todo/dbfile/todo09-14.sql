-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: localhost    Database: todo
-- ------------------------------------------------------
-- Server version	5.7.14-log

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
-- Table structure for table `table_todo`
--

DROP TABLE IF EXISTS `table_todo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `table_todo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` varchar(45) NOT NULL,
  `text` varchar(45) NOT NULL,
  `time` varchar(45) NOT NULL,
  `completed` int(11) NOT NULL DEFAULT '0' COMMENT '0 false\n1 true',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `table_todo`
--

LOCK TABLES `table_todo` WRITE;
/*!40000 ALTER TABLE `table_todo` DISABLE KEYS */;
INSERT INTO `table_todo` VALUES (4,'2016-09-13-04-37-10','异步action','2016-09-13 04:37:10',1),(5,'2016-09-13-04-37-10','存入数据库','2016-09-13 04:37:22',0),(6,'2016-09-14-09-07-30','完成状态放入mysql','2016-09-14 09:07:30',1),(7,'2016-09-14-09-07-30','部署百度云','2016-09-14 09:07:37',1),(8,'2016-09-14-09-07-30','更新单表好难啊','2016-09-14 10:20:22',0),(9,'2016-09-14-09-07-30','测试id 有没有','2016-09-14 10:51:36',0),(10,'2016-09-14-11-18-52','第一次','2016-09-14 11:18:52',0),(11,'2016-09-14-11-21-43','这次地址','2016-09-14 11:21:43',0),(12,'2016-09-14-11-21-54','痛打正山','2016-09-14 11:21:54',1);
/*!40000 ALTER TABLE `table_todo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `table_user`
--

DROP TABLE IF EXISTS `table_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `table_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` varchar(45) NOT NULL,
  `time` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `table_user`
--

LOCK TABLES `table_user` WRITE;
/*!40000 ALTER TABLE `table_user` DISABLE KEYS */;
INSERT INTO `table_user` VALUES (7,'2016-09-13-04-37-10','2016-09-13 04:37:10'),(8,'2016-09-14-09-07-30','2016-09-14 09:07:30'),(9,'2016-09-14-11-18-52','2016-09-14 11:18:52'),(10,'2016-09-14-11-21-43','2016-09-14 11:21:43'),(11,'2016-09-14-11-21-54','2016-09-14 11:21:54');
/*!40000 ALTER TABLE `table_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-09-14 11:24:21
