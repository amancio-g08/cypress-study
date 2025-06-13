export default class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: "[role='alert']",
        }
        return selectors;
    }

    acessLoginPage() {
        cy.visit('/auth/login')
        cy.url().should('include', '/auth/login')
        cy.get(this.selectorsList().usernameField).should('be.visible')
    }

    loginAnyUser(username, password) {
        
        cy.get(this.selectorsList().usernameField).should('be.visible').type(username)
        cy.get(this.selectorsList().passwordField).should('be.visible').type(password)
        cy.get(this.selectorsList().loginButton).should('be.visible').click()
    }

    verifyLoginError() {
        cy.get(this.selectorsList().wrongCredentialAlert).should('be.visible')
    }

    checkLoginError() {
        cy.get(this.selectorsList().wrongCredentialAlert).should('be.visible')
    }
}
