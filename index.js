const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "firstdb"
});
connection.connect((err)=>{console.log("hi", err)})

inquirer.prompt([
    {
        name: 'departmentName',
        message: 'What is the name of the department?',
        type: 'input'
    }
])
.then(answers => {
    console.info('Answer:', answers.departmentName);
    connection.query('SELECT id, name FROM department WHERE name=?',[answers.departmentName],(err, data) => { 
    if (err) console.error(err)
    console.table(data)
    })
});
