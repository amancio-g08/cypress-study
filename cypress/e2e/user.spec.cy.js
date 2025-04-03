import userData from '../fixtures/users/user-data.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dataField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    arrowButton :".oxd-select-text--arrow",
    nationalityStatus:".oxd-select-dropdown > :nth-child(2) > span",
    maritalStatus:":nth-child(4) > span"

  }

  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.middleNameField).clear().type('MiddleNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('NicknameTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('Employe')
    cy.get(selectorsList.genericField).eq(5).clear().type('Other')
    cy.get(selectorsList.genericField).eq(6).clear().type('DriversLicenseTest')
    cy.get(selectorsList.genericField).eq(7).clear().type('2025-12-12')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.arrowButton).eq(0).click()
    cy.get(selectorsList.nationalityStatus).click()
    cy.get(selectorsList.arrowButton).eq(1).click()
    cy.get(selectorsList.maritalStatus).click()

  //cy.get(selectorsList.submitButton).eq(0).click()
  //cy.get('body').should('contain', 'Successfully Updated')
    
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.passowrd)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
 })
})