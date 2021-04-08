const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const allQuestions = require("./questions");
const fs = require("fs");

function writeToFile(fileName, data) {
    var manager = new Manager(data.mName, data.mId, data.mEmail, data.mOffice);
    var engineer = new Engineer(data.eName, data.eId, data.eEmail, data.eGithub);
    var intern = new Intern(data.iName, data.iId, data.iEmail, data.iSchool);
    //var employee = new Employee(data.EName, data.EID, data.EEmail, data.EGithub);
    fs.writeFile(fileName, generateHTML(data), function(err) {
        if (err) {
            return console.log(err);
        }
        console.log(data)
    });
}

function init() {
    inquirer.prompt(allQuestions).then((data) => {
            writeToFile("./index.html", data);
        })
        .catch(error => {
            if (error.isTtyError) {
                console.log("You must use a different application to access this program.");
            } else {
                console.log("An error occurred.");
            }
        });
}
init();