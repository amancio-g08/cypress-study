const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: 'https://pdvtechat-orangehrm.xn7egy.easypanel.host/web/index.php'
  },
});
