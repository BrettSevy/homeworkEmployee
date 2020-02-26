const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleT = require("console.table");


let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "employee_db"
});

connection.connect(function (err) {
    if (err) throw err;
    start();
});

function start() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View all employees?",
                "View all employees by deparment?",
                "View all employees by manager?",
                "Add employee?",
                "Remove employee?",
                "Update employee role?",
                "Update employee manager?",
                "exit"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "View all employees?":
                    viewEmployees();
                    break;

                case "View all employees by deparment?":
                    viewByDepartment();
                    break;

                case "View all employees by manager?":
                    viewByManager();
                    break;

                case "Add employee?":
                    addEmployee();
                    break;

                case "Remove employee?":
                    removeEmployee();
                    break;

                case "Update employee role?":
                    updateRole();
                    break;

                case "Update employee manager?":
                    updateManager();
                    break;

                case "exit":
                    connection.end();
                    break;
            }
        });
};

function viewEmployees() {
    connection.query("select * from employee", function (err, res) {
        if (err) throw err;

        console.table(res);

    });
    start();
};

function viewByDepartment() {
    connection.query("select * from department", function (err, res) {
        if (err) throw err;

        console.table(res);

    });
    start();
};

function viewByManager() {
    connection.query("select * from manager", function (err, res) {
        if (err) throw err;

        console.table(res);

    });
    start();

};

function addEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "first_name",
                message: "What is the employees first name?",
            },
            {
                type: "input",
                name: "last_name",
                message: "What is the employees last name?",
            },
            {
                type: "input",
                name: "role_id",
                message: "What is the employees role id number?",
            },
            {
                type: "input",
                name: "manager_id",
                message: "What is the employees, mamanger id number?",
            },

        ])
        
		.then(function(answer) {
			console.log(answer);
            var newfirst_name = answer.first_name;
            let newlast_name = answer.last_name;
            let newrole_id = answer.role_id;
            let newmanager_id = answer.manager_id;
	
			var query = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ?";
			connection.query(query, [[[newfirst_name, newlast_name, newrole_id, newmanager_id]]], function(err, res) {
            });
            start();
		});
};




function removeEmployee() {
    console.log("delete employee")
};

function updateRole() {
    console.log("update role")
};

function updateManager() {
    console.log("update manager")
};