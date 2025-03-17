@UC_2
Feature: Login functionality with only username entered

  Scenario Outline: Login form with entered username and empty password credentials
    Given I am at the login page
    When I enter some username "<username>" and password "<password>", clear password field and click Login
    Then I should see the box with error message saying <errorMessage>

    Examples:
      | username          | password      | errorMessage |
      | some_user     | some_password  | Password is required |

 