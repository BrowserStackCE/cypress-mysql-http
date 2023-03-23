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
        "host": "0.0.0.0",
        "port":"8081",
        "user": "root",
        "password": "Browserstack@123",
        "database":"Demo1"
      }
    }
  },
});


