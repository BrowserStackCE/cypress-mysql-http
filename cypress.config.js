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
        "user": 'browserstack',
        "host": 'localhost',
        "database": 'demo1',
        "password": 'browserstack123',
        "port": 5432, // PostgreSQL default port
      }
    }
  },
});


