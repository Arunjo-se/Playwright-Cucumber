# Playwright-Cucumber


This project demonstrates how to use Playwright with Cucumber.js for end-to-end testing using Gherkin feature files and step definitions.

## Project Structure

```
features/
	test.feature         # Gherkin feature file

tests/
	steps.js             # Step definitions using Playwright

playwright.config.js   # Playwright configuration (optional)
package.json           # Project dependencies and scripts
```

## Getting Started

1. **Install dependencies:**
	 ```powershell
	 npm install
	 npm install @cucumber/cucumber playwright
	 ```

2. **Run the tests:**
	 ```powershell
	 npx cucumber-js features/test.feature
	 ```

## Example Feature

```
Feature: Sample Playwright Test

	Scenario: Open Google homepage
		Given I open the browser
		When I navigate to "https://www.google.com"
		Then I should see the title "Google"
```

## Example Step Definitions

See `tests/steps.js` for Playwright-powered step implementations.

## Notes
- You can add more scenarios to your feature files and implement corresponding steps in the step definition files.
- Playwright supports Chromium, Firefox, and WebKit browsers.

## Resources
- [Playwright Documentation](https://playwright.dev/)
- [Cucumber.js Documentation](https://github.com/cucumber/cucumber-js)
