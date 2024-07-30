// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import { writeFile } from 'fs/promises';


// TODO: Create an array of questions for user input
const questions = ({projectName, description, installation, usage, guidelines, test, license, github, email}) => `# <${projectName}>

## Description
Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
${description}

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
${installation}

## Usage

Provide instructions and examples for use. Include screenshots as needed.
${usage}
To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    'md
    ![alt text](assets/images/screenshot.png)
    '

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.
[${github}](${github})

[${email}](${email})

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
${license}
---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
${guidelines}

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.
${test}
`;



    // TODO: Create a function to write README file
function writeToFile(data) {
fs.writeFile(`readme.md`, data, (err) => err ? console.error(err) : console.log('Success!'))};



//selecting from the license's list above in inquirer and takes you to the license URL
//const inquirer = require('inquirer');
// const open = require('open');  //to open URLs
// const licenses = [
//     {
//         name: 'MIT', value: 'https://choosealicense.com/licenses/mit/',
//         name: 'GNU', value: 'https://choosealicense.com/licenses/agpl-3.0/',
//         name: 'Apache', value:'https://choosealicense.com/licenses/apache-2.0/'
//     }
// ];


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'what is your project name?',
            name: 'projectName'
        },
    
        {
            type: 'input',
            message: 'Enter a description of your project:',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Installation instructions:',
            name: 'installation'
        },
    
        {
            type: 'input',
            message: 'Usage information:',
            name: 'usage'
            
        },
    
        {
            type: 'input',
            message: 'Contribution guidelines:',
            name: 'guidelines'
        },
        
        {
            type: 'input',
            message: 'Test instructions:',
            name: 'test'
        },
        {
            type: 'list',
            message: 'Choose a license',
            name: 'licenses',
            choices: ['MIT', 'GNU', 'Apache']
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github'
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        }

    ])
    .then((answers) => { 
        const htmlPage = questions(answers);
        //open(licenses);
        //const email = `<a href = "${email}"`;
        writeToFile(htmlPage);
    })

    
}

// Function call to initialize app
init();

