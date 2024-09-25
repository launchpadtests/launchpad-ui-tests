Feature: Verify Inspections and Citizens landing pages in Civic Sync application

  Background:
    Given user navigates to the civic sync application
    And   login to the application with username as "harish.ghorpade@in.pega.com" and password as "Install@123"
    Then  verify that Civic sync web portal is launched

  Scenario: Verify Inspections landing page
    When user selects "Inspections" landing page option
    Then verify that "Inspections" landing page is loaded

  Scenario: Verify Citizens landing page
    When user selects "Citizens" landing page option
    Then verify that "Citizens" landing page is loaded