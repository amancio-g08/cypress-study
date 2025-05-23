import userData from '../fixtures/users/user-data.json';

describe('PDVtec - Test', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    submitButton: "",

  };

  it('Login - Success', () => {
    cy.visit('/auth/login');
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username);
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password);
    cy.get(selectorsList.loginButton).click();


    it('Login - Fail_Username')
    
  });
})