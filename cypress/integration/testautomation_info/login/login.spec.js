describe('Login-test'  , () => {
    it('Navigate to Login-page' , () => {
        cy.visit('http://training-page.testautomation.info/')
    })

    it('Register new account', () => {
        cy.get('#button-register').click()
        var timestamp = Date.now();
        cy.get('#register-username').type('user'+timestamp)
        cy.get('#register-password').type('Sprite#01')
        
    })
})