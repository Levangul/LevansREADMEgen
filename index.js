
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "title",
},
{
    type: "input",
    message: "What is the project about",
    name: "description",
}, {
    type: "input",
    message: "How to install and run this app?",
    name: "installation",
}, {
    type: "input",
    message: "How this app could be used?",
    name: "usage",
}, {
    type: "list",
    message: "What license is being used?",
    name: "license",
    choices: ["Apache license 2.0", "Mit license", "GNU General public license", "BSD 2-Clause 'simplified'", "Boost software license 1.0", "Mozila public license 2.0", "The unlicense", "None"]
}, {
    type: "input",
    message: "How to test this app?",
    name: "tests",
}, {
    type: "input",
    message: "Who contributed to this project?",
    name: "contribution",
}, {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
}, {
    type: "input",
    message: "What is your email?",
    name: "email",
},];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            return console.log("succes")
        }
    })
}


function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile("README.md", generateMarkdown(data));
            console.log(data)
        })
}


init();
