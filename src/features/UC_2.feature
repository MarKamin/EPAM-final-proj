@UC_2
Feature: Login functionality with only username entered

  Scenario: Login form with entered username and empty password credentials
    Given I am on the login page
    When I enter some username "<username>" and password "<password>"
    And I clear the password field
    And I click on the Login button
    Then I should see a box with error message saying <errorMessage>

    Examples:
      | username          | password      | errorMessage |
      | some_user     | some_password  | Password is required |

 