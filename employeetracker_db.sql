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
INSERT INTO employee_role (id, title, salary, department_id) values (2, "Lead Engineer", 1500000, 3);
INSERT INTO employee_role (id, title, salary, department_id) values (3, "Lawyer", 1900000, 4);

INSERT INTO employee (id, first_name, last_name,role_id, manager_id) values (1, 'John', 'Doe', 1, null);
INSERT INTO employee (id, first_name, last_name,role_id, manager_id) values (2, 'Mike', 'Chan', 2, null);