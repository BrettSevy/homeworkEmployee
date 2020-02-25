DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department(
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(30),
  PRIMARY KEY (id)
);

insert into department (name) values
("sewing"),
("patching"),
("design"),
("finance"),
("accounting");


CREATE TABLE role(
  id INT AUTO_INCREMENT NOT NULL,
  title VARCHAR(30),
  salary DECIMAL(10, 2),
  department_id INT,
  PRIMARY KEY (id)
);

insert into role(department_id, title, salary)
values
(1, "sewer", 30000),
(1, "chief sewer", 50000),
(2, "patcher", 20000),
(3, "chief designer", 40000),
(3, "designer", 25000),
(4, "CFO", 250000),
(4, "analyst", 25000),
(5, "accountant", 60000),
(5, "junior accountant", 40000);



CREATE TABLE employee(
  id INT(11) AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY (id)
);

insert into employee(first_name, last_name, role_id, manager_id)
values
("Brett", "Sevy", 3, 4),
("Chance", "Payne", 2, 3),
("Chris", "Christensen", 5, 4),
("Henry", "Jerman", 4, 5),
("Sara", "Sevy", 2, 1),
("Vivian", "Sevy", 1, 1);
