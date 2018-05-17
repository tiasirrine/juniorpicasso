DROP DATABASE IF EXISTS Juniorpicasso;
CREATE database Juniorpicasso;

USE Juniorpicasso;

CREATE TABLE users (
  id INT AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  email VARCHAR(40) NULL,
  password VARCHAR(100) NULL,
  PRIMARY KEY (id)
);

