const mysql = require('mysql2');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.password,
});

async function connectToDB(){
      
      con.connect((err) => {
        if(err){
          console.log('Error connecting to Mysql Db\n'+err);
          return;
        }
        console.log('Connection established');
      });
      
}

module.exports={connectToDB,con};