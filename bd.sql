CREATE DATABASE IF NOT EXISTS StoreManager;
 
 USE StoreManager;
 
 DROP TABLE IF EXISTS produtos;
 
 CREATE TABLE produtos (
 
 id INT unsigned NOT NULL auto_increment,
 name VARCHAR(40) NOT NULL,
 quantity INT NOT NULL,
 CONSTRAINT pk_characters PRIMARY KEY (id)
 );
 
 INSERT INTO StoreManager.produtos
 (
 `name`,
 quantity)
 VALUES
 (`Produto Silva`, 10); 