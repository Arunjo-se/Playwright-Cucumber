Feature: Sample Playwright Test

  Scenario: Open Playwright homepage
    Given I open the browser
    When I navigate to "https://playwright.dev/"
    Then I should see the title "Playwright"
