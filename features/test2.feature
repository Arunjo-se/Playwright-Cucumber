Feature: Sample Playwright Test

  Scenario: Open Google homepage
    Given I open the browser
    When I navigate to "https://www.google.com"
    Then I should see the title "Google"





