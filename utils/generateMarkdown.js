function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else {
    return `![${license}](https://img.shields.io/badge/license-${license}-brightgreen)`;
  } 
}

function renderLicenseLink(license) {
  if (!license) {
    return '';
  } else {
    return `[${license}](https://opensource.org/licenses/${license})`;
  }
}

function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {
    return `## License

This project is licensed under the ${renderLicenseLink(license)} license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, license) {
  const badge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  const licenseSection = renderLicenseSection(license);

  
  return `
  # ${data.title}
  
  ${badge} 
  ${licenseLink} 
  ${licenseSection} 
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
  or Email: ${data.email}

`;
}

module.exports = generateMarkdown;
