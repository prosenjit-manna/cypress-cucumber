import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit mutillidae login screen", () => {
  cy.visit("/mutillidae/index.php?page=login.php");
});

Then("I should see a login screen", () => {
  cy.get(":nth-child(5) > :nth-child(2) > input").should("exist");
});

Then("I can login with valid user name password", () => {
  cy.get(":nth-child(5) > :nth-child(2) > input").type("admin1");
  cy.get(":nth-child(6) > :nth-child(2) > input").type("admin1");
  cy.get(":nth-child(8) > td > .button").click();
});

Then("Verify Logout button", () => {
  cy.get("tr > :nth-child(3) > a").should("have.text", "Logout");
});
