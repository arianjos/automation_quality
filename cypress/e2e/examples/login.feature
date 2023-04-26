Feature: Error login

Scenario: Error message in login page
    Given I'm on the homepage
    When I access the login page
    And I type an incorret username and password
    And click on login button
    Then an error message is displayed