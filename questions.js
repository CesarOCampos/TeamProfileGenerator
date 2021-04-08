const allQuestions = [{
    managerQuestions = [{
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
            type: 'checkbox',
            name: 'employeeType',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', `I don't want to add any more team members.`],
        },
    ],

    engineerQuestions = [{
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
            type: 'checkbox',
            name: 'employeeType',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', `I don't want to add any more team members.`],
        },
    ],

    internQuestions = [{
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
            type: 'checkbox',
            name: 'employeeType',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', `I don't want to add any more team members.`],
        },
    ]
}];

module.exports = allQuestions;
// module.exports = {
//     managerQuestions,
//     engineerQuestions,
//     internQuestions
// }