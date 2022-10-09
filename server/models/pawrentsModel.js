const { Pool } = require('pg');

const PG_URI = 'postgres://dcefmgmr:A0d7Vd6Jx2fSDBemrDFvo37ZLgHkopbw@fanny.db.elephantsql.com/dcefmgmr';

// create a new pool here using the elephant sql connection string
const pool = new Pool({
    connectionString: PG_URI
});

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    }
};
  
