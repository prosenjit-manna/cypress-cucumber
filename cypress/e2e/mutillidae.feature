Feature: 
  Scenario: visiting mutillidae 
    When I visit mutillidae login screen
    Then I should see a login screen
    Then I can login with valid user name password
    Then Verify Logout button a