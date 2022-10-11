const {con} = require("../config/dbconfig");
const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const getAllProducts = async (req, res) => {
   
    try {
        con.query('SELECT * FROM qkart.products', (err,rows) => {
        if(err) throw err;
        console.log('Data received from Db:');
        res.send(rows)
      });
      
        
    } catch (error) { 
        res.status(StatusCodes.NOT_FOUND).send();
    }
};

const searchProducts = async (req, res) => {
  const keyword=req.query.value; 
  try {
      con.query('SELECT * FROM qkart.products WHERE name LIKE "%'+keyword+'%"', (err,rows) => {
      if(err) throw err;
      console.log('Data received from Db:');
      res.send(rows)
    });
    
      
  } catch (error) { 
      res.status(StatusCodes.NOT_FOUND).send();
  }
};

module.exports={getAllProducts,searchProducts}