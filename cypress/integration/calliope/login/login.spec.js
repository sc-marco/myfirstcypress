describe('First test Calliope' , () => {
    const username = 'marco.gorter@spritecloud.com'
    const password = 'Te$tAutomagician'

    it('Navigate to Calliope' , () => {
        cy.visit('https://app.calliope.pro/login')
    })

    it('Login to application', () => {
        // cy.get('#user_session_email').type('marco.gorter@spritecloud.com')
        // cy.get('#user_session_password').type('Te$tAutomagician')
        // cy.wait(5000)
        // cy.get(':nth-child(8) > .btn-primary').click()
        
    })
})