const { Pool } = require('pg');
require('dotenv').config();


const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
})




pool.connect((err)=>{
    if (err) {
        console.error('PostgreSQL connection error', err.stack);
        return;
      } 
      console.log("Connected to PostgreSQL successfully!")
    })
    
    
    module.exports = pool;
    
    
    
    // const pool = new Pool(
    //     {
    //         user:'postgres',
    //         password:'postgres',
    //         host:'localhost',
    //         port:5432,
    //         database:'notes',
    //     }
    //  );
