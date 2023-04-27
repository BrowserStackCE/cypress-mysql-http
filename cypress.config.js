const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require('./plugins/index.js')(on, config)
    },
    "projectId": "somId",
    "video": false,
    "env":{
      "db": {
        "host": "127.0.0.1",
        "port":"3306",
        "user": "root",
        "password": "Browserstack@123",
        "database":"Demo1"
      }
    }
  },
});


