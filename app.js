const cTable = require('console.table');
var inquirer = require('inquirer')
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: 'zrf081193',
    database: "employeetracker_db",
});

function employeeSearch() {
    // 1. Prints out all employees
    var query = "SELECT * FROM employee";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        runSearch();
    });
    // 2. Ask the user what they would like to do

};
function multiSearch() {
    // 1. Prints out all employees
    var query = "SELECT * FROM department";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        runSearch();
    });
    // 2. Ask the user what they would like to do

};
function roleSearch() {
    // 1. Prints out all employees
    var query = "SELECT * FROM employee_role";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        runSearch();
    });
    // 2. Ask the user what they would like to do

};

// 2. Ask the user what they would like to do

function adddepartmentSearch() {
    inquirer
        .prompt({
            name: "department",
            type: "input",
            message: "What would you like to name your department?"
        })
        .then(function (answer) {
            var query = "INSERT INTO department (name) VALUES ('" + answer.department + "')";
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
                var query = `INSERT INTO employee_role(title, salary, department_id) VALUES ("${answer.title}", ${answer.salary}, ${answer.department_id})`;
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
                var query = `INSERT INTO employee_role(title, salary, department_id) VALUES ("${answer.title}", ${answer.salary}, ${answer.department_id})`;
                connection.query(query, function (err, result) {
                    if (err) throw err;
                    console.log("1 record inserted");
                    runSearch();
                });

            });

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
                }
            });
    }
    connection.connect(function (err) {
        if (err) throw err;
        runSearch();
    });