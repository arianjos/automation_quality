import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

Given("I access google page", () => {
    cy.visit("https://www.google.com.br/");
})

When("I search for Grupo Quality", () => {
    cy.get('[title="Pesquisar"]').type('Quality Digital{enter}')
})


// Exercício 2 de automação (26/04/2023)

Given("I'm on the homepage", () => {
    cy.visit("https://automationexercise.com/");
})

When("I access the login page", () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
})

And("I type an incorret username and password", () => {
    cy.get('[data-qa="login-email"]').type('ariane.anjos@acct.global')
    cy.get('[data-qa="login-password"]').type('acct123')
})

And("click on login button", () => {
    cy.get('[data-qa="login-button"]').click()
})

Then("an error message is displayed", () => {
    cy.get('.login-form > form > p').should('have.text', 'Your email or password is incorrect!')
})