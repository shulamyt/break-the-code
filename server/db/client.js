var { Client } = require('pg');

module.exports = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'breakthecode',
    port: 5432,
    password: ''
});