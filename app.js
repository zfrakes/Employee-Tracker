var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password:'',
  });
  
  con.connect(function(err) {
    if (err) throw err;
    
    console.log("Connected!");
    
    con.query("CREATE DATABASE employeetracker_db", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });
  connection.connect(function(err) {
    if (err) throw err;
    runSearch();
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
      });
      .then(function(answer) {
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
          departmentSearch();
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