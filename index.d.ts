// Inside cypress/support/index.js or
// Inside cypress/support/indes.ts in this case
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.dataCy('greeting')
     */
    sheetUpdate(): Chainable<Element>;
  }
}