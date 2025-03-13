@UC_3
Feature: Login functionality with valid credentials

  Scenario: Login with valid credentials and validate the title
    Given I am on the login page
    When I enter a valid username "<username>" and a valid password "<password>"
    And I click on the Login button
    Then I should see the title "<title>" on the dashboard page

    Examples:
      | username          | password      | title |
      | standard_user     | secret_sauce  | Swag Labs |