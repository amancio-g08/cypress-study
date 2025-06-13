export default class PimPage {
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
        }
        return selectors;
    }

    updateUserInfo(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }
    otherInfoUpdate(empID, otherID, driverLic) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(empID)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherID)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driverLic)
    }
}