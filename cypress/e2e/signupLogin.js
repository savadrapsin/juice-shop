///<reference types="cypress"/>

describe("Signup Test", () => {
  let randomString = Math.random().toString(36).substring(2);
  const email = "auto_" + randomString + "@email.com";
  const password = "Password1";
  const securityQuestionAnswer = "Bratina";

  it("Test valid signup", () => {
    cy.visit("http://localhost:3000/#/");
    cy.get(".cdk-overlay-backdrop").click(-50, -50, { force: true });
    cy.get("#navbarAccount").click();
    cy.get("#navbarLoginButton").click({ force: true });
    cy.get("#newCustomerLink > .primary-link").click({ force: true });
    cy.get("#emailControl").type(email);
    cy.get("#passwordControl").type(password);
    cy.get("#repeatPasswordControl").type(password);
    cy.get(
      ".mat-form-field-type-mat-select > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix"
    ).click();
    cy.get("#mat-option-3 > .mat-option-text").click();
    cy.get("#securityAnswerControl").type(securityQuestionAnswer);
    cy.get("#registerButton").click();
    cy.get(".mat-snack-bar-container").contains(
      "Registration completed successfully. You can now log in."
    );
  });

  it("Test valid login", () => {
    cy.visit("http://localhost:3000/#/");
    cy.get(".cdk-overlay-backdrop").click(-50, -50, { force: true });
    cy.get("#navbarAccount").click();
    cy.get("#navbarLoginButton").click({ force: true });
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get("#loginButton").click();
    cy.get(".fa-layers-counter").contains(0);
  });
});
