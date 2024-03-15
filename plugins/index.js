const { Pool } = require('pg');

function queryTestDb(query, config) {
  // Create a new pool instance using credentials from cypress.json env's
  const pool = new Pool(config.env.db);

  // Use the pool to connect to the database and execute the query as a Promise
  return pool.query(query)
    .then((results) => {
      // Close the pool to release resources
      pool.end();
      return results.rows;
    })
    .catch((error) => {
      // Handle any errors
      throw error;
    });
}

module.exports = (on, config) => {
  // Usage: cy.task('queryDb', query)
  on("task", {
    queryDb: query => {
      return queryTestDb(query, config);
    }
  });
};