import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login Orange HRM Tests', () => {

  it('Login - Fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkLoginError()
  })

  it('Login - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.verifyDashboardPage()
  })
})