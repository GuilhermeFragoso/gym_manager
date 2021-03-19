const { Pool } = require('pg')

module.exports = new Pool({
    user: 'postgres',
    password: 'psqlrx2142',
    host: 'localhost',
    port: 5432,
    database: 'gymmanager'

})

