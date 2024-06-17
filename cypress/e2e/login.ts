import { When } from "@badeball/cypress-cucumber-preprocessor";

afterEach(function () {
  const test = this.currentTest;
  console.log(test.title);

  console.log(test.state);
});

When("A user can login with valid credentials", () => {
  cy.visit("http://localhost:3030/signin");
  cy.wait(1000);

  cy.get("#username").clear();
  cy.get("#username").type("Reyes.Osinski");
  cy.get("#password").type("s3cret");
  cy.get(".MuiButton-label").click();

  cy.get(
    '[data-test="sidenav-signout"] > .MuiListItemText-root > .MuiTypography-root'
  ).should("have.text", "Logout");
  cy.get('[data-test="sidenav"] > .MuiPaper-root > :nth-child(1)').click();
  cy.get('[data-test="sidenav-username"]').should(
    "have.text",
    "@Reyes.Osinski"
  );

  cy.task("readFileMaybe", {
    rows: [["FALSE"]],
    sheetId: "1sbO7XJz_QvG9V6Q2snsDXqDDITCz8XfYmd8mAW1u6S0",
    tabName: "DataTest",
    range: "A1",
  });

});
