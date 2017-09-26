var { Pool } = require('pg');

module.exports = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    database: 'breakthecode',
    port: 5432,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
});