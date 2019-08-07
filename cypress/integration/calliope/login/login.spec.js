describe('First test Calliope' , () => {
    it('Navigate to Calliope' , () => {
        cy.visit('https://app.calliope.pro/login')
    })

    it('Login to application', () => {
        cy.get('#user_session_email').type('marco.gorter@spritecloud.com')
        cy.get('#user_session_password').type('nywa4evtu+kEatva')
        cy.wait(5000)
        cy.get(':nth-child(8) > .btn-primary').click()
    })
})