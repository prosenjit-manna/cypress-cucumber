import { loginPage } from "../page/login-page";

export const loginPageFeatures = {
    login: () => {
        cy.get(loginPage.email).type("admin@itobuz.com");
        cy.get(loginPage.password).clear().type("Admin@1234");
        cy.get(loginPage.submitButton).click();
    }
}