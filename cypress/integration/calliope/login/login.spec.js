describe('Login-tests' , () => {
    const username = 'marco.gorter@spritecloud.com'
    const password = 'Te$tAutomagician'

    beforeEach(function () {
        cy.visit('https://app.calliope.pro/login')
        cy.clearLocalStorage()
      })

    it('Greets with Log in' , () => {
        cy.contains('h1', 'Log in')
    })

    it('Button with Google sign-in' , () => {
        cy.contains('button', 'Sign in with Google')
    })

    it('Button to Forgot password' , () => {
        cy
        .contains('Forgot password')
        .should('have.attr', 'href', '#forgot')
    })

    it('Button to Create Account' , () => {
        cy
        .contains('Create Account')
        .should('have.attr', 'href', '/register')       
    })

    it('Requires valid username and password' , () => {
        cy.get('#user_session_email').type(username)
        cy.get('#user_session_password').type('invalid{enter}')
        cy.get('#flash_danger')
        .should('contain', 'Email or password is invalid')
    })
    
    it('Navigate to Dashboard on successful login' , () => {
        cy.get('#user_session_email').type(username)
        cy.get('#user_session_password').type(password+'{enter}')
        cy.get('b').should('include.text', 'Your workspace')
    })

    it('Logout user', () => {
        // @ts-ignore
        cy.login()

        cy.get('.user-profile > .hidden-xs').click()
        cy.get('#sign-out').click()
        cy.contains('h1', 'Log in')
    })
})