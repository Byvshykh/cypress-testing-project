class BasePage {
    static loadHomePage() {
        cy.visit('https://devexpress.github.io/testcafe/example/')
    }

    static wait(number) {
        cy.wait(number)
    }
}

class HomePage extends BasePage {
    static scrollToBotton() {
        cy.get('#submit-button').scrollIntoView()  
    }

    static scrollToTop() {
        cy.get('header').scrollIntoView() 
    }
}

describe('Abstraction with Class',() => {
    before(function() {
        //runs before all tests inside describe
        //setup test data or test context
        //send or reset the database
        HomePage.loadHomePage()
    })

    after(function() {
        //runs after all tests inside describe block are done
        //test clean up
        //clean cookies or localStorage
    })

    beforeEach(function() {
        //runs before each it block in the describe
    })

    afterEach(function() {
        //runs after each it block in the describe
    })

    it('1st IT', () => {
        HomePage.scrollToBotton()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000)
    })

    it('2nd IT', () => {
        HomePage.scrollToBotton()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000)
    })
})