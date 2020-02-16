CREATE DATABASE employeetracker_db;

USE employeetracker_db;

CREATE TABLE department(

 id INTEGER PRIMARY KEY
 
 name VARCHAR(30),
);

CREATE TABLE empolyee_role (
  id INTEGER PRIMARY KEY
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT
);

CREATE TABLE empolyee (
  id INT PRIMARY KEY
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INTEGER,
  manager_id INTEGER
);
