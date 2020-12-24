describe('Browser Actions', () => {
    it('should load books website', () => {
        cy.visit('http://books.toscrape.com/index.html', { timeout: 10000 })
        cy.url().should('include', 'index.html')
        cy.log('Before Reload')
        cy.reload()
        cy.log('After Reload')
    })

    it('should click on Poetry category', () => {
        cy.get('a')
            .contains('Poetry')
            .click()
        cy.get('h3').contains('Olio')
    })

    it('should click on Olio book', () => {
        cy.get('a')
            .contains('Olio')
            .click()
    })

    it('should display correct price of books', () => {
        cy.get('.price_color')
            .contains('£23.88')
    })

})
