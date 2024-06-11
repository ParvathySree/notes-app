const { Pool } = require('pg');

    const pool = new Pool(
        {
            user:'postgres',
            password:'postgres',
            host:'localhost',
            port:5432,
            database:'notes',
        }
     );

pool.connect((err)=>{
    if (err) {
        console.error('PostgreSQL connection error', err.stack);
        return;
      } 
      console.log("Connected to PostgreSQL successfully!")
    })
    
    
    module.exports = pool;
    
    
    
