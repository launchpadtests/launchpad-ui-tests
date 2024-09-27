Feature: Create Issue

  Background:
    Given user navigates to the civic sync application
    And   login to the application
    Then  verify that Civic sync web portal is launched
  
  Scenario: Create a new issue
    When User clicks on "Issue" button
    And User fills in the issue details
    And User submits the new issue
    Then User is on Additional details view
    And User submits the issue additional details
    Then User is on Collect Issue info view
    And User fills in the issue info
    And User submits the issue info
    And User submits the verify category
    And User submits the urgency
    And User submits the process issue
    And User submits the feedback
