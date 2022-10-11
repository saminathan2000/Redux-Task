const {con} = require("../config/dbconfig");
const { StatusCodes } = require('http-status-codes');

const loginUser = async (req, res) => {
  const reqBody = req.body;
    try {
      con.query(`SELECT * FROM spotify2.user where email="`+reqBody.username+`"`, (err,rows) => {
        if(err) res.status(StatusCodes.NOT_FOUND).send(err);
        res.status(StatusCodes.CREATED).send(rows);
        });
        
    } catch (error) { 
        res.status(StatusCodes.NOT_FOUND).send();
    }
};

const registerUser = async (req, res) => {
  const reqBody = req.body; 
  try {
      con.query(`SELECT * FROM qkart.user where username="`+reqBody.username+`"`, (err,rows) => {
      if(err) res.status(StatusCodes.NOT_FOUND).send(err);
      console.log('Data received from Db:',rows);
      if(rows==[]){
        con.close();
        res.status(StatusCodes.NOT_FOUND).send("Username already exists");
      }
      
      });  

      var sql = `INSERT INTO qkart.user (username,password) VALUES ("`+reqBody.username+`","`+reqBody.password+`")`;
      con.query(sql, (err,result) => {
      if(err) res.status(StatusCodes.NOT_FOUND).send(err);
      console.log('Data inserted');
      console.log(result)
      res.status(StatusCodes.CREATED).send(result);
    });
    
  } catch (error) { 
      res.status(StatusCodes.NOT_FOUND).send();
  }
};

module.exports={loginUser,registerUser}