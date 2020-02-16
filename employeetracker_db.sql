DROP DATABASE IF EXISTS employeetracker_db
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




INSERT INTO empolyee (firstName, lastName,role_id, manager_id) values ('john', 'Doe','Sales Lead','Ashley Rodriguez');
INSERT INTO empolyee (firstName, lastName,role_id, manager_id) values ('Mike', 'Chan','Salesperson','John Doe');
INSERT INTO empolyee (firstName, lastName,role_id, manageer_id) values ('Ashley', 'Rodriguez','lead Engieering');
INSERT INTO empolyee (firstName, lastName,role_id, manager_id) values ('Kevin', 'Tupik','Software Engineer','Asheley Rodriguez');
INSERT INTO empolyee (firstName, lastName,role_id, manager_id) values ('Malia', 'Brown','Accountant');
INSERT INTO empolyee (firstName, lastName,role_id, manager_id) values ('Sarah', 'Lourd','legal Team Lead',);
INSERT INTO empolyee (firstName, lastName,role_id, manager_id) values ('Tom', 'Allen','laywer','Sarah Lourd');
INSERT INTO empolyee (firstName, lastName,role_id, manager_id) values ('Christian', 'Eckenrode','Lead Engieering','Mike Chan');