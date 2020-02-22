const cTable = require('console.table');
const inquirer = require('inquirer')
const  mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: '',
    database: "employeetracker_db",
});

function employeeSearch() {
   
    const query = "SELECT * FROM employee";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        runSearch();
    });
  

};
function multiSearch() {
    const query = "SELECT * FROM department";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        runSearch();
    });
   

};
function roleSearch() {
     const query = "SELECT * FROM employee_role";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        runSearch();
    });
   

};


function adddepartmentSearch() {
    inquirer
        .prompt({
            name: "department",
            type: "input",
            message: "What would you like to name your department?"
        })
        .then(function (answer) {
            const query = "INSERT INTO department (name) VALUES ('" + answer.department + "')";
            connection.query(query, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");
                runSearch();
            });

        });
    }
    function addroleSearch() {
        inquirer
            .prompt([{
                name: "title",
                type: "input",
                message: "What would you like to name your new role?"
            }, {
                name: "salary",
                type: "input",
                message: "What would you like the salary to be?"
            }, {
                name: "department_id",
                type: "input",
                message: "What would you like the department to be (enter id)?"
            }])
            .then(function (answer) {
                const query = `INSERT INTO employee_role(title, salary, department_id) VALUES ("${answer.title}", ${answer.salary}, ${answer.department_id})`;
                connection.query(query, function (err, result) {
                    if (err) throw err;
                    console.log("1 record inserted");
                    runSearch();
                });

            });

    }
    function addemployeeSearch() {
        inquirer
            .prompt([{
                name: "first_name",
                type: "input",
                message: "What is the first name of the employee you would like to add?"
            }, {
                name: "last_name",
                type: "input",
                message: "What is the last name of the employee you would like to add?"
            }, {
                name: "role_id",
                type: "input",
                message: "What would you like the role to be (enter id)?"
            },
              {
                name: "manager_id",
                type: "input",
                message: "Who would you like to be assign manager (enter id)?"
            }])

            .then(function (answer) {
                const query = `INSERT INTO employee (first_name, last_name, role_id,manager_id) VALUES ("${answer.first_name}", "${answer.last_name}", ${answer.role_id}, ${answer.manager_id})`;
                connection.query(query, function (err, result) {
                    if (err) throw err;
                    console.log("1 record inserted");
                    runSearch();
                });

            })
        }
            
            function  updatemployeeroleSearch() {
                inquirer
                    .prompt([{
                        name: "id",
                        type: "input",
                        message: "Which employee would you like to update (enter id)?"
                    }, 
                     {
                        name: "role_id",
                        type: "input",
                        message: "What would you like the updated role to be (enter id)?"
                    }, 
                    ])
            
            .then(function(answer) {
                const query = `UPDATE employee SET role_id = ${answer.role_id} WHERE id = ${answer.id}`;
                connection.query(query, function (err, result) {
                  if (err) throw err;
                  console.log(result.affectedRows + " record(s) updated");
                });
              });
            }
            function updatemployeemanagerSearch() {
                inquirer
                    .prompt([{
                        name: "id",
                        type: "input",
                        message: "Which employee would you like to update (enter id)?"
                    }, 
                     {
                        name: "manager_id",
                        type: "input",
                        message: "Who would you like to be updated manager (enter id)?"
                    }, 
                    ])
            
            .then(function(answer) {
                const query = `UPDATE employee SET manager_id = ${answer.manager_id} WHERE id = ${answer.id}`;
                connection.query(query, function (err, result) {
                  if (err) throw err;
                  console.log(result.affectedRows + " record(s) updated");
                });
              });
            }
        function runSearch() {
        inquirer
            .prompt({
                name: "action",
                type: "rawlist",
                message: "What would you like to do?",
                choices: [
                    "View All Employees",
                    "View All Departments",
                    "View All Roles",
                    "Add Department",
                    "Add Role",
                    "Add Employee",
                    "Update employee roles",
                    "Update employee manager"
                ]
            })
            .then(function (answer) {
                switch (answer.action) {
                    case "View All Employees":
                        employeeSearch();
                        break;

                    case "View All Departments":
                        multiSearch();
                        break;

                    case "View All Roles":
                        roleSearch();
                        break;

                    case "Add Department":
                        adddepartmentSearch();
                        break;

                    case "Add Role":
                        addroleSearch();
                        break;

                    case "Add Employee":
                        addemployeeSearch();
                        break;
                    
                    case "Update employee roles":
                        updatemployeeroleSearch();
                        break;
                    case "Update employee manager":
                        updatemployeemanagerSearch();
                        break;
                }
            });
    }
    connection.connect(function (err) {
        if (err) throw err;
        runSearch();
    });