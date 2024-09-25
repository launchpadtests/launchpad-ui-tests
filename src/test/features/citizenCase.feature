Feature: Create Citizen case

  Background:
    Given user navigates to the civic sync application
    And   login to the application with username as "harish.ghorpade@in.pega.com" and password as "Install@123"
    Then  verify that Civic sync web portal is launched

Scenario: Create and validate citizen case details
    When user creates "Citizen" case
    And user enters below data
    |Name|Email|Address|PhoneNumber|PostalCode|
    |Citizen|p@p.com|NY|180001111|587920|
    And user submits the case
    Then user verifies the case status as "Open-Active"
    Then user validates below data in details section
    |Name|Email|Address|PhoneNumber|PostalCode|
    |Citizen|p@p.com|NY|180001111|587920|