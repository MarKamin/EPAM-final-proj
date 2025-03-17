@UC_1
Feature: Login functionality with empty Username and Password fields

  Scenario Outline: Login form with empty credentials
    Given I am on the login page
    When I enter any username "<username>" and password "<password>", then clear the fields and click Login
    Then I should see a box with error message saying <errorMessage>

    Examples:
      | username          | password      | errorMessage |
      | some_user     | some_sauce  | Username is required |
 