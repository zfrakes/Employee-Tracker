USE employeetracker_db;

CREATE TABLE department(
id INTEGER PRIMARY KEY,
name VARCHAR(30)
);

CREATE TABLE employee_role (
  id INTEGER PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INTEGER
);

CREATE TABLE employee (
  id INT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INTEGER,
  manager_id INTEGER
);
INSERT INTO department (id, name) values (1,"Finance");
INSERT INTO department (id, name) values (2, "Sales");
INSERT INTO department (id, name) values (3, "Engineering");
INSERT INTO department (id, name) values (4, "Legal");


INSERT INTO employee_role (id, title, salary, department_id) values (1, "Sales Lead", 1000000, 2);
INSERT INTO employee_role (id, title, salary, department_id) values (2, "Salesperson", 800000, 2);
INSERT INTO employee_role (id, title, salary, department_id) values (3, "Lead Engieering", 150000, 3);
INSERT INTO employee_role (id, title, salary, department_id) values (4, "Software Engieering", 120000, 3);
INSERT INTO employee_role (id, title, salary, department_id) values (5, "Accountant", 120000, 1);
INSERT INTO employee_role (id, title, salary, department_id) values (6, "Legal Team Lead", 250000, 4);
INSERT INTO employee_role (id, title, salary, department_id) values (7, "Lawyer", 190000, 4);
INSERT INTO employee_role (id, title, salary, department_id) values (8, "Lead Engieering", 150000, 3);



INSERT INTO employee (id, first_name, last_name,role_id, manager_id) values (1, 'John', 'Doe', 1, 3);
INSERT INTO employee (id, first_name, last_name,role_id, manager_id) values (2, 'Mike', 'Chan', 2, 1;
INSERT INTO employee (id, first_name, last_name,role_id, manager_id) values (3, 'Ashley', 'Rodriguez', 3, null);
INSERT INTO employee (id, first_name, last_name,role_id, manager_id) values (4, 'Kevin', 'Tupik', 4, 3);
INSERT INTO employee (id, first_name, last_name,role_id, manager_id) values (5, 'Malia', 'Brown', 5, null);
INSERT INTO employee (id, first_name, last_name,role_id, manager_id) values (6, 'Sarah', 'Lourd', 6, null);
INSERT INTO employee (id, first_name, last_name,role_id, manager_id) values (7, 'Tom', 'Allen', 7, 6);
INSERT INTO employee (id, first_name, last_name,role_id, manager_id) values (8, 'Christian', 'Eckenrode', 7, 2);

