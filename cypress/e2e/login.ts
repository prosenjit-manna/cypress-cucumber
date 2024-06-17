import { When } from "@badeball/cypress-cucumber-preprocessor";


afterEach(function () {
  const test = this.currentTest;
  const data = {
    rows: [[test.state === "passed" ? "PASSED" : "FAILED"]],
    sheetId: "1sbO7XJz_QvG9V6Q2snsDXqDDITCz8XfYmd8mAW1u6S0",
    tabName: "DataTest",
  };

  if (test.title.includes("#DataTestA1")) {
    cy.task("readFileMaybe", { ...data, range: "A1" });
  } else if (test.title.includes("#DataTestA2")) {
    cy.task("readFileMaybe", { ...data, range: "A2" });
  }

  console.log("Test finished", test.title, test.state);
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
});

When("A user can not login with valid credentials", () => {
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
    "@Reyes.Osinskia"
  );
});