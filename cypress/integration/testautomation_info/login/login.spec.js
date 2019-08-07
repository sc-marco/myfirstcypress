describe('Login-test'  , () => {
    var timestamp = Date.now();
    const username = 'u'+timestamp
    const password = 'Sprite#01'

    it('Navigate to Login-page' , () => {
        cy.visit('http://training-page.testautomation.info/')
    })

    it('Register new account', () => {
        cy.get('#button-register').click()

        cy.get('#register-username').type(username)
        cy.get('#register-password').type(password)
        cy.get('#gender-mail').check()
        cy.get('#register-experience').select('Ruby')
        cy.get('#register-experience').select(['Cucumber', 'Gherkin'])
        cy.get('#register-bio').type('I am a Test Automation user. My username is '+username+' and this is my bio')
        cy.get('#register-complete-all').check()
        cy.get('#button-save').click()
        cy.get('.alert').should('include.text', 'You are now registered as')
        cy.get('.alert').should('include.text', username)
    })

    it('Login with valid credentials' , () => {
        cy.get('#login-username').type(username)
        cy.get('#login-password').type(password)
        cy.get('#button-login').click()
        cy.get('.username').should('include.text', username)
    })

    it('Logout' , () => {
        cy.get('.username').should('include.text', username).click()
        cy.get('#link-logout').click()
        cy.get('#login-username').should('be.empty')
    })
})