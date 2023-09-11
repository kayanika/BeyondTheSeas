const { Pool } = require('pg');

 
const pool = new Pool(
    {


  //  host: 'dpg-cjd0jp2nip6c739lreng-a.singapore-postgres.render.com',
  // database: 'beyondtheseas',
  // password: 'KOzPun0L1NwkLqedJABdhktUvN38C630',
  user:'postgres',
  host:'localhost',
  database:'beyondtheseasvs4',

//    host: 'dpg-cjd0jp2nip6c739lreng-a.singapore-postgres.render.com',
//   database: 'beyondtheseas',
//   password: 'KOzPun0L1NwkLqedJABdhktUvN38C630',

    password:'era123',
  port: 5432,
// ssl : true,

    }
)


module.exports={
    query:(text,params)=>pool.query(text,params)
    
}