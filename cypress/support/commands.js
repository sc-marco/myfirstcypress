// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', () => {
    cy.visit('https://app.calliope.pro/login')
    cy.clearLocalStorage()
    cy.visit('https://app.calliope.pro/login')
    cy.get('#user_session_email').type('marco.gorter@spritecloud.com')
    cy.get('#user_session_password').type('Te$tAutomagician{enter}')
    cy.get('b').should('include.text', 'Your workspace')
})

Cypress.Commands.add('openProject', (projectName) => {
    cy.visit('https://app.calliope.pro/dashboard')
    cy.contains(projectName).click()
        cy.get('.last-breadcrumb-item').invoke('text').then((breadcrum) => {
            expect(breadcrum).to.include(projectName)
        })
})
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
