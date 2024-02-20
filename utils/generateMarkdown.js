// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of contents
  - [installation](#installation)
  - [usage](#usage)
  - [license](#license)
  - [tests](#tests)
  - [contribution](#contribution)
  - [questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage

  ${data.usage}
  ## License

  ${data.license}
  ## Tests

  ${data.tests}
  ## Contribution

  ${data.contribution}
  ## Questions

  If you have any questions please contact me at 
  https://github.com/${data.username} 
  or
  ${data.email}

`;
}

module.exports = generateMarkdown;
