import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import PimPage from '../pages/pimPage'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const pimPage = new PimPage()

describe('Orange HRM Tests', () => {


  it('User Info Update - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.verifyDashboardPage()
    menuPage.acessMyInfo()
    pimPage.updateUserInfo(chance.first(), chance.last(), chance.string())
    pimPage.otherInfoUpdate(chance.cpf(), chance.cpf(), chance.cpf())

    
  })
})