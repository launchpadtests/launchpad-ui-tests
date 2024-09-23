Feature: User Authentication tests

  Background:
    Given User navigates to the application
    

  Scenario: Login should be success
    And User enter the username as "student"
    And User enter the password as "Password123"
    When User click on the login button
    Then Login should be success

  Scenario: Login should not be success
    Given User enter the username as "student"
    Given User enter the password as "Password1234"
    And User click on the login button
    Then Login should fail