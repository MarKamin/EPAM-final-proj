@UC_1
Feature: Login functionality with empty Username and Password fields

  Scenario: Login form with empty credentials
    Given I am on the login page
    When I enter any username "<username>" and password "<password>"
    And I clear the username and password fields
    And I click on the Login button
    Then I should see a box with error message saying <errorMessage>

    Examples:
      | username          | password      | errorMessage |
      | some_user     | some_sauce  | Username is required |
