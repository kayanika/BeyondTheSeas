const { Pool } = require('pg');

 
const pool = new Pool(
    {
//         user: 'postgres',
//    host: 'localhost',
//   database: 'beyondtheseas',
//   password: 'era123',
//   port: 5432,
    user: 'kayanika',
   host: 'dpg-cjd0jp2nip6c739lreng-a.singapore-postgres.render.com',
  database: 'beyondtheseas',
  password: 'KOzPun0L1NwkLqedJABdhktUvN38C630',
  port: 5432,
  ssl : true,
    }
)


module.exports={
    query:(text,params)=>pool.query(text,params)
    
}
