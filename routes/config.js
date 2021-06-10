const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    // host: env.DB_HOST || 'localhost',
    // user: env.DB_USER || 'root',
    // password: env.DB_PASSWORD || '',
    //     database: env.DB_NAME || 'riafy',

    host:env.DB_HOST || "sql6.freemysqlhosting.net",
     user:env.DB_USER ||'sql6418286',
     database:env.DB_NAME || 'sql6418286',
    password:env.DB_PASSWORD || 'zGHjzIPf2N',
     waitForConnections: true,
     port:3306,
    connectionLimit: env.DB_CONN_LIMIT || 2,
    queueLimit: 0,
    debug: env.DB_DEBUG || false
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};
  
module.exports = config;