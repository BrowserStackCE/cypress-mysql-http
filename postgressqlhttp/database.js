const { Pool } = require('pg');

const postgresConnection = new Pool({
  user: 'browserstack',
  host: 'localhost',
  database: 'demo1',
  password: 'browserstack123',
  port: 5432, // PostgreSQL default port
});

postgresConnection.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('DB connected successfully');

  // Do something with the client (e.g., query the database)

  release(); // Release the client back to the pool
});

module.exports = postgresConnection;