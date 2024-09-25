# Launchpad UI Tests

## Overview
This repository contains the automated UI tests for the Launchpad project. The tests are built using [TypeScript](https://www.typescriptlang.org/) and [Gherkin](https://cucumber.io/docs/gherkin/). It follows a behavior-driven development (BDD) approach. Cucumber is a popular behavior-driven development (BDD) tool that allows developers and stakeholders to collaborate on defining and testing application requirements in a human-readable format.

There are 4 test scenarios in this project on "Civic Sync" application.
Scenario #1: Verify "Inspections" landing page
Scenario #2: Verify "Citizens" landing page
Scenario #3: Create "Issue" case
Scenario #4: Create "Citizen Registration" case

## Video Demo
Refer demo videos below to understand the project structure and getting started with the setup and running the tests.

1. Project Structure
2. Set up and run the tests
3. Reports and screenshot

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
Ensure you have the following installed:
- [Node.js](https://nodejs.org/). This project is built using node v22.6.0
- [npm](https://www.npmjs.com/). This project is built using npm v10.8.2 

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/launchpadtests/launchpad-ui-tests.git
   
2. Extract and open the project in the Visual Studio-Code (VS-Code)
3. Install dependencies
    `npm i` to install the dependencies
    `npx playwright install` to install the browsers    
4. Run the tests 
    `npm run test` to execute the tests