# Playwright Automation Assessment

This repository fulfills the requirements for Part 3 of the QA Engineer Assessment at Reveal and contains automation tests built using Playwright

## Getting Started

### Prerequisites
Ensure you have Node.js and Git installed on your machine.

### Installation
1. Clone this repository to your local machine.
    `git clone https://github.com/brandonbemq/take_home_assessment.git`
2. Navigate to the project directory.
    `cd take_home_assessment`
3. Install project dependencies:
    `npm install`
4. Install the required Playwright browser binaries:
    `npx playwright install`

### Optional VS Code Setup
VS Code is a helpful IDE used to write Playwright. If you wish to run the tests in VS Code, follow the steps below:
1. Download VS Code for free on Linux, Mac, or Windows.
2. Install and launch VS Code using the installer appropriate for your operating system.
3. Once VS Code is installed and running, click the Extensions button on the left-side panel.
4. Install the Playwright Test for VS Code extension by Microsoft

## Running Tests

You can run the tests using the following terminal commands:

* **Run all tests:**
    `npx playwright test`

* **Run tests in headed mode:**
    `npx playwright test --headed`

* **Open Playwright UI mode:**
    `npx playwright test --ui`

## Generating Reports 

After running the tests, you can open an HTML report locally to view results, traces, and screenshots using the command:
    `npx playwright show-report`

## Project Structure
* `tests\` - Contains the test specifications and 3 automations for the saucedemo website (`saucy.spec.ts`).
* `playwright.config.ts` - Main configuration file for environments, here you can find traces and screenshots set to capture on failures
* `helpers\` - Contains a helper function that is used by multiple tests for logging into the saucedemo website (`loginHelper.ts`).

## Notes
* Tests are set to run on Chromium only due to Windows Smart App Control blocking the locally installed Playwright Webkit runtime during development.
* `npm init playwright@latest` was used to originally initialize the project. This command is not required for install because the project is already Playwright configured.
