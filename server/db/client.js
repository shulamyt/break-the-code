var { Client } = require('pg');

module.exports = new Client({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    database: 'breakthecode',
    port: 5432
});