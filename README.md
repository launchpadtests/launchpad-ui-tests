# Launchpad UI Tests

## Overview
This repository contains the automated UI tests for the Launchpad project. The tests are built using [TypeScript](https://www.typescriptlang.org/) and [Gherkin](https://cucumber.io/docs/gherkin/). It follows a behavior-driven development (BDD) approach. Cucumber is a popular behavior-driven development (BDD) tool that allows developers and stakeholders to collaborate on defining and testing application requirements in a human-readable format.

There are 4 test scenarios in this project on "Civic Sync" application.
1. Verify "Inspections" landing page
2. Verify "Citizens" landing page
3. Create "Issue" case
4. Create "Citizen Registration" case

## Video Demo
Refer demo videos under [Demo-Videos directory] to understand the project structure and getting started with the setup and running the tests.

1. Pre-requisite
2. Repo Clone and VS Code Setup
3. Project Structure and Executing the Tests
4. Debug Failed Tests
5. VS Code Editor and Cucumber Extension Settings

## Features

1. Awesome report with screenshots for failed steps
2. Parallel execution
3. Scalable to use popular design patterns like Page Object Model (POM) 

## Project Structure
1. `src\test\features` -> Write your features here
2. `src\test\steps` -> Your step definitions goes here
3. `src\hooks\hooks.ts` -> Browser setup and teardown logic
4. `src\hooks\pageConfig.ts` -> Simple way to share the page objects to steps
5. `package.json`: Manages dependencies and scripts
6. `.gitignore`: Files to be ignored by Git
7. `cucumber.json` -> cucumber configurations reqyired to run the tests

## Getting Started

### Prerequisites
Ensure you have the following installed. Refer: https://nodejs.org/en/download/prebuilt-installer
- [Node.js] This project is built using node v22.6.0. 
- [npm] This project is built using npm v10.8.2 
- [git] Refer: https://git-scm.com/downloads

[Note] To run Playwright tests minimum node.js version required is >=18.

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/launchpadtests/launchpad-ui-tests.git

2. Extract and open the project in the Visual Studio-Code (VS-Code)
3. Open the terminal in VS-Code editor
4. Install dependencies
    `npm i` to install the dependencies
    `npx playwright install` to install the browsers    
5. Run the tests 
    `npm run test` to execute the tests