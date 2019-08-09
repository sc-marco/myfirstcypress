describe('Project tests' , () => {
    var timestamp = Date.now();
    const username = 'marco.gorter@spritecloud.com'
    const password = 'Te$tAutomagician'
    const projectName = 'project'+timestamp

    beforeEach(function () {
        // @ts-ignore
        cy.login()

        cy.visit('https://app.calliope.pro/dashboard')
    })

    it('Create new project', () => {
        cy
            .contains('Add New Project')
            .should('have.attr', 'href', '/projects/new')
            .click()
        cy.get('h2').should('include.text', 'New Project')
        cy.get('.form-control').clear()
            .type(projectName)
        cy.get('.btn').should('have.text', 'Submit').click()
        cy.get('#flash_success')
            .should('contain', projectName)
    })

    it('Open project' , () => {
        cy.contains(projectName).click()
        cy.get('.last-breadcrumb-item')
            .invoke('text')
                .then((breadcrum) => {
                expect(breadcrum).to.eq(projectName)
            })
    })

    it('Edit project', () => {
        // @ts-ignore
        cy.openProject(projectName)

        cy.get('.breadcrumbs > .cursor-pointer > .fa').click()
        cy.get('#project_name').type('_edit')
        cy.get('.btn-primary')
            .should('have.text', 'Save')
            .click()
        cy.get('#flash_success').should('contain', 'Project name was successfully updated')
    })

    it('Cancel edit project', () => {
        // @ts-ignore
        cy.openProject(projectName)

        cy.get('.breadcrumbs > .cursor-pointer > .fa').click()
        cy.get('.btn-default')
            .should('have.text', 'Close')
            .click()
        cy.get('.last-breadcrumb-item')
            .invoke('text')
                .then((breadcrum) => {
                expect(breadcrum).to.include(projectName)
            })
    })

    it('Delete project', () => {
        // @ts-ignore
        cy.openProject(projectName)

        cy.get('.breadcrumbs > .cursor-pointer > .fa').click()
        cy.get('.btn-danger')
            .should('have.text', 'Delete')
            .click()
    })

})