const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee.js");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const generateHTML = require("./generateHTML");
const employeeArray = [];

function writeToFile(fileName, htmlText) {
    console.log("writing to html perhaps");
    fs.writeFile(fileName, htmlText, (err) =>
        err ? console.error(err) : console.log('Success!'));
}

const managerQuestions = [{
        type: 'input',
        name: 'managerName',
        message: `What is the team manager's name?`,
    },
    {
        type: 'input',
        name: 'managerId',
        message: `What is the team manager's ID number?`,
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: `What is the team manager's email?`,
    },
    {
        type: 'input',
        name: 'officeNum',
        message: `What is the team manager's office number?`,
    },
    {
        type: 'list',
        name: 'employeeType',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', `I don't want to add any more team members.`],
    },
];

const engineerQuestions = [{
        type: 'input',
        name: 'engineerName',
        message: `What is your engineer's name?`,
    },
    {
        type: 'input',
        name: 'engineerId',
        message: `What is your engineer's ID number?`,
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: `What is the engineer's email?`,
    },
    {
        type: 'input',
        name: 'github',
        message: `What is your engineer's GitHub username?`,
    },
    {
        type: 'list',
        name: 'employeeType',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', `I don't want to add any more team members.`],
    },
];

const internQuestions = [{
        type: 'input',
        name: 'internName',
        message: `What is your intern's name?`,
    },
    {
        type: 'input',
        name: 'internId',
        message: `What is your intern's ID number?`,
    },
    {
        type: 'input',
        name: 'internEmail',
        message: `What is the intern's email?`,
    },
    {
        type: 'input',
        name: 'school',
        message: `What is your intern's school?`,
    },
    {
        type: 'list',
        name: 'employeeType',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', `I don't want to add any more team members.`],
    },
];

//asks the questions & generates the html
const askQuestions = (questions) => {
    inquirer
        .prompt(questions)
        .then((answers) => {
            //card process making begins
            if (employeeArray.length === 0) {
                const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNum);
                employeeArray.push(manager);
            } else { //Determine whether current answers are Engineer's or Intern's and create/add appropriate object to employee array
                if (answers.github) { // Engineer
                    const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
                    employeeArray.push(engineer);
                } else if (answers.school) { // Intern
                    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
                    employeeArray.push(intern);
                }
            } //if engineer/intern are hit, render those questions else make html
            if (answers.employeeType === "Engineer") {
                askQuestions(engineerQuestions);
            } else if (answers.employeeType === "Intern") {
                askQuestions(internQuestions)
            } else { //its done, make the html
                writeToFile('./index.html', generateHTML(employeeArray));
            }
        })
        .catch(error => {
            if (error.isTtyError) {
                console.log("You need to use a different terminal to access this program.");
            } else {
                console.log("An error occurred.");
            }
        });
}

askQuestions(managerQuestions);