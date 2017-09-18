var { Client } = require('pg');

module.exports = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'breakthecode',
    password: null,
    port: 5432
});