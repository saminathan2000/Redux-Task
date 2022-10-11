const {con} = require("../config/dbconfig");
const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const getAddress = async (req, res) => {
    const reqAuth=req.headers.authorization;
    if ((reqAuth && reqAuth.split(' ')[0] === 'Bearer')==false) {
        
        res.status(StatusCodes.NOT_FOUND).send();
    }
    
    const BearerToken = reqAuth.split(" ")[1]
    console.log(BearerToken)
    try {
        con.query('SELECT * FROM qkart.address where token = "'+BearerToken+'"', (err,rows) => {
        if(err) throw err;
        console.log('Address data received from Db:');
        res.send(rows)
      });
      
        
    } catch (error) { 
        res.status(StatusCodes.NOT_FOUND).send();
    }
};

const addAddress = async (req, res) => {
    const reqAuth=req.headers.authorization;
    const addr = req.body.address;
    if ((reqAuth && reqAuth.split(' ')[0] === 'Bearer')==false) {
        res.status(StatusCodes.NOT_FOUND).send();
    }
    const BearerToken = reqAuth.split(" ")[1]
    try {
        var sql = `INSERT INTO qkart.address (token,address) VALUES ("`+BearerToken+`","`+addr+`")`;
        con.query(sql, (err,result) => {
            if(err) res.status(StatusCodes.NOT_FOUND).send(err);
            console.log('Cart Updated');
            console.log(result)
            res.status(StatusCodes.CREATED).send(result);
          });
      
    } catch (error) { 
        res.status(StatusCodes.NOT_FOUND).send();
    }
};

const deleteAddress = async (req, res) => {
    const reqAuth=req.headers.authorization;
    const _id= req.params.id
    if ((reqAuth && reqAuth.split(' ')[0] === 'Bearer')==false) {
        
        res.status(StatusCodes.NOT_FOUND).send();
    }
    
    const BearerToken = reqAuth.split(" ")[1]
    console.log(BearerToken)
    try {
        con.query('DELETE FROM qkart.address where token = "'+BearerToken+'" and _id='+_id, (err,rows) => {
        if(err) throw err;
        console.log('Address data deleted from Db:');
        res.send(rows)
      });
      
        
    } catch (error) { 
        res.status(StatusCodes.NOT_FOUND).send();
    }
};

module.exports={addAddress,getAddress,deleteAddress}