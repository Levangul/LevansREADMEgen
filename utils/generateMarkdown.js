
function renderLicenseBadge(license) {
  if (license === "None") {
    return '';
  } else {
    return `![${license}](https://img.shields.io/badge/license-${license}-brightgreen)`;
  }
}

function renderLicenseLink(license) {
  if (license === "None") {
    return '';
  } else {
    return `[${license}](https://opensource.org/licenses/${license})`;
  }
}

function renderLicenseSection(license) {
  if (license === "None") {
    return '';
  } else {
    return `## License
    
  This project is licensed under ${renderLicenseLink(license)} license.`;
  }
}

function generateMarkdown(data) {



  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

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
  
  ${renderLicenseSection(data.license)} 

  ## Tests

  ${data.tests}
  ## Contribution

  ${data.contribution}
  ## Contact

  If you have any questions please contact me at 
  https://github.com/${data.username} 
  or Email: ${data.email}

`;
}

module.exports = generateMarkdown;
