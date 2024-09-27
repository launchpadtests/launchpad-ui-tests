# Launchpad UI Tests

## Overview
This repository contains the [Playwright](https://playwright.dev/) automated UI tests for the Launchpad project. The tests are built using [TypeScript](https://www.typescriptlang.org/) and [Gherkin](https://cucumber.io/docs/gherkin/). It follows a behavior-driven development (BDD) approach. Cucumber is a popular behavior-driven development (BDD) tool that allows developers and stakeholders to collaborate on defining and testing application requirements in a human-readable format.

There are 4 test scenarios in this project on "Civic Sync" application.
1. [Verify "Inspections" landing page](src/test/features/landingPages.feature)
2. [Verify "Citizens" landing page](src/test/features/landingPages.feature)
3. [Create "Issue" case](src/test/features/issue.feature)
4. [Create "Citizen Registration" case](src/test/features/citizenCase.feature)

## Video Demo
Refer demo videos under [Demo-Videos directory] to understand the project structure and getting started with the setup and running the tests.

1. [Pre-requisite](Demo-Videos/1.%20Pre-requisite.mp4) 
2. [Repo Clone and VS Code Setup](Demo-Videos/2.%20Repo%20Clone%20and%20VS%20Code%20Setup.mp4)
3. [Project Structure and Executing the Tests](Demo-Videos/3.%20Project%20Structure%20and%20Executing%20the%20Tests.mp4)
4. [Debug Failed Tests](Demo-Videos/4.%20Debug%20Failed%20Tests.mp4)
5. [VS Code Editor and Cucumber Extension Settings](Demo-Videos/5.%20VS%20Code%20Editor%20and%20Cucumber%20Extension%20Settings.mp4)

## Features

1. Awesome report with screenshots for failed steps
2. Parallel execution
3. Scalable to use popular design patterns like Page Object Model (POM) 

## Project Structure
1. [`src\test\features`](src/test/features/) -> Write your features here
2. [`src\test\steps`](src/test/steps/) -> Your step definitions goes here
3. [`src\test\user-settings.json`](src/test/user-settings.json) -> Provider application url, username and password in this file.
4. [`src\hooks\hooks.ts`](src/hooks/hooks.ts) -> Browser setup and teardown logic
5. [`src\hooks\pageConfig.ts`](src/hooks/pageConfig.ts) -> Simple way to share the page objects to steps
6. [`package.json`](package.json) -> Manages dependencies and scripts
7. [`cucumber.json`](cucumber.json) -> cucumber configurations reqyired to run the tests

## Getting Started

### Prerequisites
Ensure you have the following installed. Refer: https://nodejs.org/en/download/prebuilt-installer
- [Node.js] This project is built using node v22.6.0. 
- [npm] This project is built using npm v10.8.2 
- [git] Refer: https://git-scm.com/downloads

[Note] To run Playwright tests with cucumber node.js version required is 18 || 20 || >=22.

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/launchpadtests/launchpad-ui-tests.git

2. Extract and open the project in the Visual Studio-Code (VS-Code)
3. Ensure [`src\test\user-settings.json`](src/test/user-settings.json) file is updated with applicationurl, username and password
4. Open the terminal in VS-Code editor
5. Install dependencies
    `npm i` to install the dependencies
    `npx playwright install` to install the browsers    
6. Run the tests 
    `npm run test` to execute the tests