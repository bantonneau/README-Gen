// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const markdown = require("./utils/generateMarkdown")
//badges use shield.io (badmath to display?)
//fs for file system access


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "message",
        message: "Answer the following questions to generate a README file for your project",
        name: "msg1"
    },
    {
        type: "message",
        message: "(Use \<br> for line breaks - useful for making numbered lists)",
        name: "msg3"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
        validate: function (input) {
            if (input.trim() === '') {
                return 'You must enter a title.';
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Write a short description of your project.",
        name: "description",
        validate: function (input) {
            if (input.trim() === '') {
                return 'You must enter a description.';
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Write the installation instructions for your project.",
        name: "installation",
        validate: function (input) {
            if (input.trim() === '') {
                return 'You must enter installation instructions';
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Write the usage instructions for your project.",
        name: "usage",
        validate: function (input) {
            if (input.trim() === '') {
                return 'You must enter usage instructions.';
            }
            return true;
        }
    },
    {
        type: "input",
        message: "List any contributers, third party assets, or tutorials used and their respective links",
        name: "credits",
        validate: function (input) {
            if (input.trim() === '') {
                return 'You must enter attributions.';
            }
            return true;
        }
    },
    {
        type: "input",
        message: "List instructions for testing",
        name: "tests",
        validate: function (input) {
            if (input.trim() === '') {
                return 'You must enter test instructions.';
            }
            return true;
        }
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "username",
        validate: function (input) {
            if (input.trim() === '') {
                return 'You must enter your github username.';
            }
            return true;
        }
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
        validate: function (input) {
            if (input.trim() === '') {
                return 'You must enter your email.';
            }
            return true;
        }
    },
    {
        type: "list",
        message: "What license?",
        name: "license",
        choices: ["MIT","Apache","The Unilicense","Boost License"],
    },
];

// TODO: Create a function to write README file
function writeToFile(readMeTextArg) {
    fs.writeFile('./output/README.md', readMeTextArg, function (err) {
        err ? console.log(err) : console.log("Success")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (answers) {
        let markdownResult = markdown(answers);
        writeToFile(markdownResult);
    })}

// Function call to initialize app
init();
