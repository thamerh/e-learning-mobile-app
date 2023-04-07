/*Generation Time*/
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";
--
-- Database: `pfe`
--


--
-- Table structure for table `cours`
--
CREATE TABLE cours(
   theme VARCHAR(50),
   nbLessons INT,
   description VARCHAR(2500) NOT NULL,
   active INT,
   duration DOUBLE,
   PRIMARY KEY(theme)
);
--
-- Table structure for table `lesson`
--
CREATE TABLE lesson(
   id INT NOT NULL AUTO_INCREMENT,
   active INT NOT NULL,
   duration DOUBLE,
   description VARCHAR(500),
   title VARCHAR(100),
   percent DOUBLE,
   filename VARCHAR(500),
   theme VARCHAR(50) NOT NULL,
   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY(id),
   FOREIGN KEY(theme) REFERENCES cours(theme)
);

